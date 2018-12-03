# webpack-setup-env

[![Travis CI](https://img.shields.io/travis/iguntur/webpack-setup-env.svg?style=flat-square)](https://travis-ci.org/iguntur/webpack-setup-env)
[![node](https://img.shields.io/node/v/webpack-setup-env.svg?style=flat-square)](#)
[![npm](https://img.shields.io/npm/v/webpack-setup-env.svg?style=flat-square)](https://www.npmjs.org/package/webpack-setup-env)

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
const webpackSetup = require('webpack-setup-env');

module.exports = webpackSetup({
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {...},
    plugins: [new webpack.DefinePlugin({...})],
    resolve: {...},
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
            plugins: [...]
        },
        production: {
            mode: 'production',
            entry: [
                path.resolve(__dirname, 'src/app.js')
            ],
            output: {
                filename: 'js/app.[hash].bundle.js'
            },
            plugins: [ ... ]
        },
        ...
    }
});
```


## API

### webpackSetup(`options`)

- Params:
    - `options`: `<object>` - Webpack configuration.
        - `options.env[process.env.NODE_ENV]` - Webpack configuration
- Returns: `<object>` - Merged by [`lodash.mergeWith`](https://lodash.com/docs/#mergeWith)


## Inspiration

* [BabelJS](https://babeljs.io/docs/en) API, like [creating a preset](https://babeljs.io/docs/en/plugins#creating-a-preset).


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
