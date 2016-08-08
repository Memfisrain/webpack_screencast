const path = require("path");

const webpack = require("webpack");
const NODE_ENV =  process.env.NODE_ENV || "development";

module.exports =  {
    context: path.resolve(__dirname, "frontend"),
    entry: "./main",
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "[name].js"
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
      }),*/
      new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en-gb/),
      new webpack.NoErrorsPlugin(),
    	new webpack.DefinePlugin({
    		NODE_ENV: JSON.stringify(NODE_ENV)
    	})/*,
      new webpack.optimize.CommonsChunkPlugin({
          name: "common",
          minChunks: 2
      })*/
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
          test: /\.jade$/,
          exclude: /\\node_modules\\/,
          loader: "jade"
        },
        {
          test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
          exclude: /\\node_modules\\/,
          loader: "url?name=[path][name].[ext]?limit=1024"
        }
    	],

      noParse: /angular\\angular/
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