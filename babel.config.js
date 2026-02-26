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
          '@dropdown': './src/dropdown',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@overlay': './src/overlay',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}