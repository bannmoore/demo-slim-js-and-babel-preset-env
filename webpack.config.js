const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules(?!\/slim-js\/))/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.join(__dirname, '.babelrc')
          }
        }
      }
    ]
  }
}
