/* eslint-disable */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {main: './src/index.ts'},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.ts']
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		})
	],
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public'
	}
};
