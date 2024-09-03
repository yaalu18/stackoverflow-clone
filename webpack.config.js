import path from 'path';

export default {
  entry: './index.js', // Entry point of your React application
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files in node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use presets for modern JavaScript and React
          }
        }
      }
    ]
  }
}