module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				// Disable type checking
				isolatedModules: true,
			},
		],
	},
};
