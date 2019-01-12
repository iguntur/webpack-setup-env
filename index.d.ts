import {Configuration} from 'webpack';

export interface Options {
	env?: {
		[key: T]: Configuration;
	};
}

export default function webpackSetup(config: Configuration & Options): Configuration;
