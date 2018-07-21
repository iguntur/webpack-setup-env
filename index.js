'use strict';
const mergeWith = require('lodash.mergewith');

function customizer(objValue, srcValue) {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}

const defaultEnv = {
	env: {
		production: {},
		development: {}
	}
};

function webpackSetup(config) {
	const webpackConfig = Object.assign({}, defaultEnv, config);
	const envConfig = webpackConfig.env;

	delete webpackConfig.env;

	switch (process.env.NODE_ENV) {
		case 'development':
			return mergeWith(webpackConfig, envConfig.development, customizer);
		case 'production':
		default:
			return mergeWith(webpackConfig, envConfig.production, customizer);
	}
}

module.exports = webpackSetup;
