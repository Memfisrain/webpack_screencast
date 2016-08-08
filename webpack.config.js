const path = require("path");

const webpack = require("webpack");
const NODE_ENV =  process.env.NODE_ENV || "development";

module.exports =  {
    context: __dirname + "/frontend",
    entry: {
        app: "./app"
    },
    output: {
        path: __dirname + "/public/js",
        publicPath: "/js/",
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
    		{test: /\.js$/, exclude: wrapRegExp(/\\node_modules\\/, "exclude"), loaders: ["babel"]}
    	],

      noParse: wrapRegExp(/\\node_modules\\[^!]+$/, "noParse")
    }
};

function wrapRegExp(regExp, label) {
  regExp.test = function(path) {
    console.log(label, path);
    return RegExp.prototype.test.call(this, path);
  };

  return regExp;
}


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