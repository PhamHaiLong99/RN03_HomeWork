module.exports = {
  root: true,
  extends: '@react-native-community',
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  plugins: ['spellcheck'],
  rules: {
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: 'en_US',
        skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils'],
        skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
        skipWordIfMatch: ['^foobar.*$'],
        minLength: 3,
      },
    ],
  },
};
