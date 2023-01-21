module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^utils/(.*)$": "<rootDir>/utils/$1",
    "^Hooks/(.*)$": "<rootDir>/Hooks/$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^mocks/(.*)$": "<rootDir>/mocks/$1",
    "^API/(.*)$": "<rootDir>/API/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "^Types/(.*)$": "<rootDir>/Types/$1",
    "^styles/(.*)$": "<rootDir>/styles/$1",
    "^constants/(.*)$": "<rootDir>/constants/$1",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
