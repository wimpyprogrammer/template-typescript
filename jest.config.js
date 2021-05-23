module.exports = {
	collectCoverageFrom: ['./src/**/?*.(js|ts)', '!**/src/**/?*.d.ts'],
	restoreMocks: true,
	globals: {
		'ts-jest': {
			isolatedModules: true,
			tsconfig: 'src/tsconfig.test.json',
		},
	},
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
};
