// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createDefaultPreset } = require('ts-jest');

module.exports = {
	collectCoverageFrom: ['./src/**/?*.(js|ts)', '!**/src/**/?*.d.ts'],
	restoreMocks: true,
	testEnvironment: 'node',
	transform: {
		...createDefaultPreset().transform,
		'^.+.tsx?$': [
			'ts-jest',
			{ isolatedModules: true, tsconfig: 'tsconfig.test.json' },
		],
	},
	verbose: true,
};
