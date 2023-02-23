module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    'adapters(.*)$': '<rootDir>/src/adapters/$1',
    'domains(.*)$': '<rootDir>/src/domains/$1',
    'frameworks(.*)$': '<rootDir>/src/frameworks/$1',
    'hooks(.*)$': '<rootDir>/src/frameworks/web/hook/$1',
  },
  setupFiles: ['dotenv/config'],
};
