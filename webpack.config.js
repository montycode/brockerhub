var HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
          '@': path.resolve(__dirname, 'src/'),
      }
  },
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new WebpackPwaManifest({
        name: 'brokerhub - Real Estate Development',
        short_name: 'brokerhub',
        display: "standalone",
        start_url: '/',
        description: 'brokerhub - Made and developed by CILABS.',
        background_color: '#ffffff',
        theme_color: '#fc5b06',        
        ios: {
            'apple-mobile-web-app-title': 'brokerhub',
            'apple-mobile-web-app-status-bar-style': 'black'
        },
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
            {
                src: path.resolve('src/assets/img/maskable_icon.png'),
                sizes: [120, 152, 167, 180, 1024],
                destination: path.join('icons', 'ios'),
                ios: true
            },
            {
                src: path.resolve('src/assets/img/maskable_icon.png'),
                size: 1024,
                destination: path.join('icons', 'ios'),
                ios: 'startup'
            },
            {
                src: path.resolve('src/assets/img/maskable_icon.png'),
                sizes: [36, 48, 72, 96, 144, 192, 512],
                destination: path.join('icons', 'android')
            },
            {
                src: path.resolve('src/assets/img/maskable_icon.png'),
                size: '1024x1024',
                purpose: 'maskable'
            }
        ]
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 150000000
    }),
],
  devServer: {
      historyApiFallback: true
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'https://api.brokerhub.mx/api/v1'
      })
  }
}