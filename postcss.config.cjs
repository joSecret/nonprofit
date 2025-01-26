
const postcssAdvancedVar = require('postcss-advanced-variables');
const postcssCustomMediaGenerator = require('postcss-custom-media-generator');
const postcssNested = require('postcss-nested');
const postcssCalc = require("postcss-calc");
const postcssUrl = require('postcss-url');
const postcssPresetEnv = require('postcss-preset-env');
const postcssPixelsToRem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const postcssEach = require('postcss-each');

module.exports = {
  plugins: [
    postcssAdvancedVar,

    postcssNested,

    postcssCustomMediaGenerator({
      "--light": "prefers-color-scheme: light",
      "--dark": "prefers-color-scheme: dark",
      sm: 576,
      md: 768,
      "--switchDown": "(max-width: 991px)",
      "--switchUp": "(min-width: 992px)",
      lg: 992,
      xl: 1200,
      xxl: 1400,
    }),

    postcssPresetEnv({
      stage: 2,
      preserve: false,
      autoprefixer: {
        cascade: false,
        grid: 'no-autoplace',
      },

      features: {
        'custom-properties': false,
        'blank-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'has-pseudo-class': false,
        'image-set-function': false,
        'prefers-color-scheme-query': false,
        'logical-properties-and-values': false,
      }
    }),

    postcssCalc,

    postcssEach,

    postcssPixelsToRem({
      propList: [
        '*',
        '!background-position',
        '!border',
        '!border-width',
        '!box-shadow',
        '!border-top*',
        '!border-right*',
        '!border-bottom*',
        '!border-left*',
        '!border-start*',
        '!border-end*',
        '!outline*',
      ],
      mediaQuery: true,
      minPixelValue: 3,
    }),

    postcssUrl({
      filter: '**/*.svg',
      url: 'inline',
      optimizeSvgEncode: true,
    }),

    cssnano()
  ],
};
