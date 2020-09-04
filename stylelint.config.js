module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'declaration-empty-line-before': null,
    'no-empty-source': null,
    'no-duplicate-selectors': null
  }
}
