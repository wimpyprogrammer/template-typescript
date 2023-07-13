// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	collectCoverageFrom: ['./src/**/?*.(js|ts)', '!**/src/**/?*.d.ts'],
	restoreMocks: true,
	testEnvironment: 'node',
	transform: {
		...tsjPreset.transform,
		'^.+\\.tsx?$': [
			'ts-jest',
			{ isolatedModules: true, tsconfig: 'tsconfig.test.json' },
		],
	},
	verbose: true,
};
