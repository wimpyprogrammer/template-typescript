/// <reference types="node" />
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './demo/src/index.ts',
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					context: resolve(__dirname, 'src'),
					from: '**/*.html',
				},
			],
		}),
	],
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: { noEmit: false },
							configFile: resolve(__dirname, './tsconfig.json'),
							projectReferences: true,
						},
					},
				],
			},
		],
	},
	output: {
		filename: 'demo.js',
		path: resolve(__dirname, './lib'),
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
