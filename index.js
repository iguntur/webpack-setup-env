'use strict';
const mergeWith = require('lodash.mergewith');

function customizer(objValue, srcValue) {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

function webpackSetup(config) {
	const NODE_ENV = process.env.NODE_ENV || 'production';

	const defaultEnv = {
		env: {[NODE_ENV]: {}}
	};

	const webpackConfig = Object.assign({}, defaultEnv, config);
	const envConfig = webpackConfig.env;

	delete webpackConfig.env;

	return mergeWith(webpackConfig, envConfig[NODE_ENV], customizer);
}

module.exports = webpackSetup;
module.exports.default = webpackSetup;
