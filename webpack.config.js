const {resolve} = require('path')

module.exports =  ({dev})=>({
  entry: ['react-hot-loader/patch', './index.js'],
  devServer:{
    contentBase: resolve('web'),
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'web'),
    publicPath: '/'
  },
  devtool:  dev ? 'eval': 'source-map',

  module:{ rules:[
    {test: /\.js$/, loaders:['babel-loader', 'eslint-loader'], exclude: /node_modules/},
    {test: /\.(gif|jpe?g|png|svg|ttf|eot)$/, loader: 'file-loader'},
  ]},

})
