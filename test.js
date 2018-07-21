import test from 'ava';
import m from '.';

test('setup for development', t => {
	process.env.NODE_ENV = 'development';

	const config = m({
		entry: 'src/index.js',
		output: {
			path: __dirname
		},
		env: {
			development: {
				output: {filename: 'development.bundle.js'}
			},
			production: {
				output: {filename: 'production.bundle.js'}
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'development.bundle.js'
		}
	};

	t.deepEqual(config, expected);
});

test('setup for production', t => {
	process.env.NODE_ENV = 'production';

	const config = m({
		entry: 'src/index.js',
		output: {
			path: __dirname
		},
		env: {
			development: {
				output: {filename: 'development.bundle.js'}
			},
			production: {
				output: {filename: 'production.bundle.js'}
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'production.bundle.js'
		}
	};

	t.deepEqual(config, expected);
});

test('set default as production', t => {
	const config = m({
		entry: 'src/index.js',
		output: {
			path: __dirname
		},
		env: {
			development: {
				output: {filename: 'development.bundle.js'}
			},
			production: {
				output: {filename: 'production.bundle.js'}
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'production.bundle.js'
		}
	};

	t.deepEqual(config, expected);
});

test('with an array config - development', t => {
	process.env.NODE_ENV = 'development';

	class FooPlugin {}
	class DevelopmentPlugin {}
	class ProductionPlugin {}

	const config = m({
		entry: 'src/index.js',
		output: {
			path: __dirname
		},
		plugins: [new FooPlugin()],
		env: {
			development: {
				output: {filename: 'development.bundle.js'},
				plugins: [new DevelopmentPlugin()]
			},
			production: {
				output: {filename: 'production.bundle.js'},
				plugins: [new ProductionPlugin()]
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'development.bundle.js'
		},
		plugins: [new FooPlugin(), new DevelopmentPlugin()]
	};

	t.deepEqual(config, expected);
});

test('with an array config - production', t => {
	process.env.NODE_ENV = 'production';

	class FooPlugin {}
	class DevelopmentPlugin {}
	class ProductionPlugin {}

	const config = m({
		entry: 'src/index.js',
		output: {
			path: __dirname
		},
		plugins: [new FooPlugin()],
		env: {
			development: {
				output: {filename: 'development.bundle.js'},
				plugins: [new DevelopmentPlugin()]
			},
			production: {
				output: {filename: 'production.bundle.js'},
				plugins: [new ProductionPlugin()]
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'production.bundle.js'
		},
		plugins: [new FooPlugin(), new ProductionPlugin()]
	};

	t.deepEqual(config, expected);
});
