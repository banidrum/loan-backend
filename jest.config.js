module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/tests"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
