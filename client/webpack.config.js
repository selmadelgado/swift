const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'customiser.js',
    path: path.resolve(__dirname, '../server/public/js'),
  }
}