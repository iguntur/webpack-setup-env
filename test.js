import test from 'ava';
import m from '.';

test.beforeEach(() => {
	delete process.env.NODE_ENV;
});

test('setup for development', t => {
	process.env.NODE_ENV = 'development';

	const actual = m({
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

	t.deepEqual(actual, expected);
});

test('setup for production', t => {
	process.env.NODE_ENV = 'production';

	const actual = m({
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

	t.deepEqual(actual, expected);
});

test('set default as production', t => {
	const actual = m({
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

	t.deepEqual(actual, expected);
});

test('with an array actual - development', t => {
	process.env.NODE_ENV = 'development';

	class FooPlugin {}
	class DevelopmentPlugin {}
	class ProductionPlugin {}

	const actual = m({
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

	t.deepEqual(actual, expected);
});

test('with an array actual - production', t => {
	process.env.NODE_ENV = 'production';

	class FooPlugin {}
	class DevelopmentPlugin {}
	class ProductionPlugin {}

	const actual = m({
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

	t.deepEqual(actual, expected);
});

test('additinal NODE_ENV', t => {
	process.env.NODE_ENV = 'debug';

	const actual = m({
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
			},
			debug: {
				output: {filename: 'debug.bundle.js'}
			}
		}
	});

	const expected = {
		entry: 'src/index.js',
		output: {
			path: __dirname,
			filename: 'debug.bundle.js'
		}
	};

	t.deepEqual(actual, expected);
});
