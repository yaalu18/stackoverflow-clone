const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( 'C:\Users\HP\Desktop\stackoverflow-clone\client\src', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
