var HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
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
                    options: { name: 'assets/[hash].[ext]' },
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
  plugins: [
      new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
  }),
    new WebpackPwaManifest({
        name: 'BrokerHub - Real State Development',
        short_name: 'BrokerHub',
        display: "standalone",
        start_url: '/',
        description: 'Brokerhub - Made and developed by CILABS.',
        background_color: '#ffffff',
        theme_color: '#fc5b06',        
        ios: {
            'apple-mobile-web-app-title': 'BrokerHub',
            'apple-mobile-web-app-status-bar-style': 'black'
        },
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
            {
                src: path.resolve('src/assets/img/logo-bh.png'),
                sizes: [120, 152, 167, 180, 1024],
                destination: path.join('icons', 'ios'),
                ios: true
            },
            {
                src: path.resolve('src/assets/img/logo-bh.png'),
                size: 1024,
                destination: path.join('icons', 'ios'),
                ios: 'startup'
            },
            {
                src: path.resolve('src/assets/img/logo-bh.png'),
                sizes: [36, 48, 72, 96, 144, 192, 512],
                destination: path.join('icons', 'android')
            },
            {
                src: path.resolve('src/assets/img/logo-bh.png'),
                size: '1024x1024',
                purpose: 'maskable'
            }
        ]
    })
],
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