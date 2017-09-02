var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./src/main.ts",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};

module.exports = webpackConfig;