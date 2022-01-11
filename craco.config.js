/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias')
const webpack = require('webpack')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        /* tsConfigPath should point to the file where "paths" are specified */
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ],
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          buffer: require.resolve('buffer'),
          url: require.resolve('url/')
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      ]
    },
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
