/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: ['node_modules/(?!variables/.*)'],

	testEnvironment: 'jest-environment-jsdom',
};

export default config;
