module.exports = {
  transform: {
    "^.+\\.tsx?$": ["esbuild-jest", { sourcemap: "inline" }],
  },
  globalSetup: "<rootDir>/src/testing/setup.ts",
  testMatch: ["<rootDir>/src/**/*.spec.ts?(x)"],
};
