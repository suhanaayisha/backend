import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Look for tests in __tests__ or *.test.ts / *.spec.ts
  testMatch: [
    "**/__tests__/**/*.test.ts",
    "**/?(*.)+(spec|test).ts"
  ],

  // Clear mocks between tests
  clearMocks: true,

  // Optional: coverage
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],

  moduleFileExtensions: ['ts', 'js', 'json'],

  // Avoid transforming TypeScript in node_modules
  transformIgnorePatterns: [
    "/node_modules/"
  ]
};

export default config;