
const rules = [
  './rules/ecmascript-6'
];

module.exports = {
  extends: rules.map(require.resolve),
  parserOptions: { ecmaVersion: 6 },
  env: { es6: true }
};
