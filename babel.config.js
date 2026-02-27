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
          '@internal': './src/internal',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@overlay': './src/overlay',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
