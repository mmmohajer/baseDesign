module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(css|styl|less|sass|scss)$":
      "<rootDir>/node_modules/jest-css-modules-transform",
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
