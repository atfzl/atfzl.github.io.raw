/* eslint-disable global-require */

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = config => [
  require('stylelint')(),
  require('autoprefixer')({
    browsers: AUTOPREFIXER_BROWSERS,
  }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')(),
  ] : [],
];
