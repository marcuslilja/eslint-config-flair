
const rules = [
  './rules/possible-errors',
  './rules/best-practices',
  './rules/strict-mode',
  './rules/variables',
  './rules/nodejs-and-commonjs',
  './rules/stylistic-issues'
];

module.exports = { extends: rules.map(require.resolve) };
