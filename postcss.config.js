/* eslint-disable global-require */

module.exports = config => [
  require('stylelint')(),
  require('postcss-cssnext')({
    browsers: 'last 20 versions',
  }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')(),
  ] : [],
];
