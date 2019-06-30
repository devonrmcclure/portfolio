const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
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
