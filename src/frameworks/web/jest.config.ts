module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
    'adapters(.*)$': '<rootDir>/../../../adapters/$1',
    'domains(.*)$': '<rootDir>/../../../domains/$1',
    'frameworks(.*)$': '<rootDir>/../../../frameworks/$1',
    'hooks(.*)$': '<rootDir>/hooks/$1',
    'di(.*)$': '<rootDir>/di/$1',
  },
  // The test environment that will be used for testing
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // setupFiles: ['dotenv/config'],
};
