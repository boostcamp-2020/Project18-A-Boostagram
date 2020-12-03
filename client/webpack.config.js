const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.png|jpg|gif|svg$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            limit: 10000,
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      '@common': path.resolve(__dirname, 'src/components/common/'),
      '@style': path.resolve(__dirname, 'src/components/style/'),
      '@home': path.resolve(__dirname, 'src/components/home/'),
      '@newFeed': path.resolve(__dirname, 'src/components/newFeed/'),
      '@feedExplore': path.resolve(__dirname, 'src/components/feedExplore/'),
      '@profile': path.resolve(__dirname, 'src/components/profile/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@context': path.resolve(__dirname, 'src/context/'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    hot: true,
    overlay: true,
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
