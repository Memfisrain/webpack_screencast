const path = require("path");

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const NODE_ENV =  process.env.NODE_ENV || "development";
const rimraf = require("rimraf");

module.exports =  {
    context: path.resolve(__dirname, "frontend"),
    entry: {
      home:  "./home",
      about: "./about",
      common: "./common"
    },
    output: {
        path: path.resolve(__dirname, "public/assets"),
        publicPath: "/",
        filename: "[name].js",
        library: "[name]"
    },
/*
    externals: {
      jquery: "$"
    },*/

    watch: NODE_ENV === "development",
    devtool: NODE_ENV === "development"? "cheap-inline-module-source-map" : null,

    plugins: [
     /* new webpack.ProvidePlugin({
        _: "lodash"
      }),
      {
        apply: compiler => {
          rimraf.sync(compiler.options.output.path)
        }
      },*/
      new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en-gb/),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: "common",
          minChunks: 2
      }),
      //new ExtractTextPlugin("styles.[contenthash].css", {allChunks: true}),
      new ExtractTextPlugin("styles.css", {allChunks: true, disable: NODE_ENV === "development"})

    ],

    resolve: {
        root: __dirname + "/vendor",
        alias: {
          old: "old/old"
        },
        moduleDirectories: ["node_modules"],
        extensions: ["", ".js"]
    },

    resolveLoader: {
        moduleDirectories: ["node_modules"],
        moduleTemplate: ["*-loader", "*"],
        extensions: ["", ".js"]
    },

    module: {
    	loaders: [
    		{
          test: /\.js$/,
          exclude: /\\node_modules\\/,
          loader: "babel"
        },
        {
          test: /\.css$/,
          exclude: /\\node_modules\\/,
          loaders: ["style", "css"]
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract("style", "css!stylus?resolve url")
        },
        {
          test: /\.jade$/,
          exclude: /\\node_modules\\/,
          loader: "jade"
        },
        {
          test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
          exclude: /\\node_modules\\/,
          loader: "url?name=[path][name].[ext]?[hash:6]"
        }
    	],

      noParse: /angular\\angular/
    },
    devServer: {
      host: "localhost",
      port: "8080",
      proxy: [{
        path: /.*/,
        target: "http://localhost:3000"
      }],
      hot: true
    }
};

if (NODE_ENV == "production") {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
              drop_console: true,
              unsafe: true
          }
      })
    );
}