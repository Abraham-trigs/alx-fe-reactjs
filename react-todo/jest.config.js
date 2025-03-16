export default {
  transform: {
      "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-react"] }]
  },
  testEnvironment: "jsdom"
};
