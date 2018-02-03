const {resolve} = require('path')
const request = require('sync-request')
// const res = request('get', 'https://raw.githubusercontent.com/iot-course/org/master/.eslintrc.json')
// const options = JSON.parse(res.getBody('utf8'))


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
    {test: /\.js$/, loader:'babel-loader', exclude: /node_modules/},
    // {test: /\.js$/, loader:'eslint-loader', exclude: /node_modules/,  options},
    {test: /\.(gif|jpe?g|png|svg|ttf|eot)$/, loader: 'file-loader'},
  ]},

})
