/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testTimeout: 10000, // Increase the timeout if necessary
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
};
