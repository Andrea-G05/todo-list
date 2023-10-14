const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	plugins: [
		new HtmlWebpackPlugin({
		  template: "src/index.html",
		}),
		new MiniCssExtractPlugin(),
	],

	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|giif)$/i,
				type: 'asset/resource',
			},
		],
	},
};