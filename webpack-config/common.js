// import ExtractTextPlugin from 'extract-text-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ENTRY, OUTPUT, TEMPLATE,}=require('./PATHS');
const webpack = require('webpack');
module.exports = {
	entry: ENTRY,
	output: {
		path: OUTPUT,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: TEMPLATE,
		}),
	],
};