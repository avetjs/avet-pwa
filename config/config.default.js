const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

exports.pwa = {
  SWPrecacheOptions: {
    verbose: true,
    staticFileGlobsIgnorePatterns: [/\.avet\//],
    runtimeCaching: [
      {
        handler: 'networkFirst',
        urlPattern: /^https?.*/
      }
    ]
  }
}

exports.build = {
  webpack: (webpackConfig, webpack, config) => {
    webpackConfig.plugins.push(
      new SWPrecacheWebpackPlugin(config.pwa.SWPrecacheOptions)
    )

    return webpackConfig;
  }
}
