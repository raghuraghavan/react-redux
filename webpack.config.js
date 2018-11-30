    var path = require('path');
    const webpack = require('webpack');
    module.exports = {
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        watch: true,
          module: {
              rules: [{
                      test: /\.js$/,
                      exclude: /node_modules/,
                      loader: 'babel-loader',
                      query: {
                          presets: ['react', 'env', 'stage-1','flow']
                      }
                  },
                  {
                      test: /\.svg$/,
                      loader: 'svg-inline-loader'
                  },
                  {
                      test: /\.css$/,
                      loader: 'style-loader!css-loader'
                  }
              ]
          }
    }
