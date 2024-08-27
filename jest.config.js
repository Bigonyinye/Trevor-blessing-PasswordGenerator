module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // This tells Jest to use ts-jest to process .ts and .tsx files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'], // Recognize .ts and .tsx files in addition to .js
};
