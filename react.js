
const rules = [
  './rules/react/standard',
  './rules/react/jsx'
];

module.exports = {
  extends: rules.map(require.resolve),
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
