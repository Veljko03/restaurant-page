const path = require('path');
const HtmlWebplackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  

  plugins: [
    new HtmlWebplackPlugin({
        template: './src/index.html',
        title: "Some title",
        filename: 'index.html',
        inject: 'body',
    })
  ]
};