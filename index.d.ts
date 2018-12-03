import {Configuration} from 'webpack';
export default function webpackSetup(config: Configuration & {
	env?: {
		[key: string]: Configuration;
	};
}): Configuration;
