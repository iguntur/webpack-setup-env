# webpack-setup-env [![Build Status](https://travis-ci.org/iguntur/webpack-setup-env.svg?branch=master)](https://travis-ci.org/iguntur/webpack-setup-env)

> Setup webpack config with additional env property like babel preset options.

---


## Install

```
$ npm install webpack-setup-env
```


## Usage

```js
// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const webpackSetupEnv = require('webpack-setup-env');

module.exports = webpackSetupEnv({
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{ ... }
		]
	},
	plugins: [
		new webpack.DefinePlugin({ ... }),
		new webpack.ProvidePlugin({ ... }),
	],
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass']
	},
	env: {
		development: {
			mode: 'development',
			devtool: 'inline-source-map',
			entry: [
				'webpack-hot-middleware/client',
				path.resolve(__dirname, 'src/app.js')
			],
			output: {
				filename: 'js/app.bundle.js'
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin()
			]
		},
		production: {
			mode: 'production',
			devtool: 'none',
			entry: [
				path.resolve(__dirname, 'src/app.js')
			],
			output: {
				filename: 'js/app.[hash].bundle.js'
			},
			plugins: [
				new webpack.HashedModuleIdsPlugin()
			]
		}
	}
});
```


## API

### webpackSetupEnv(options)

* [options](#options): `<object>` <br/>
	Your webpack configuration.
* Return: `<object>`

## Inspiration

* [BabelJS](https://babeljs.io/docs/en) API, like [creating a preset](https://babeljs.io/docs/en/plugins#creating-a-preset).


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
