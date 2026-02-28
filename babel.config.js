module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@': './src',

          '@theme': './src/theme',
          '@constants': './src/constants',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
