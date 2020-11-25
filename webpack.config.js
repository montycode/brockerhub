var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?compact=false'
            },
            {
                test: /\.css$/,
                use: [
                "style-loader",
                { loader: "css-loader", options: { importLoaders: 1 } },
                "postcss-loader",
                ],
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: { 
                        name: 'assets/[name].[ext]',
                        publicPath: 'assets'
                    },
                },
                ],
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          '@': path.resolve(__dirname, 'src/'),
      }
  },
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
  })],
  devServer: {
      historyApiFallback: true
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://localhost:4000'
      })
  }
}