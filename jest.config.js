module.exports = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	testEnvironment: 'node',
	testMatch: ['**/src/**/?*.spec.(js|ts)'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
};
