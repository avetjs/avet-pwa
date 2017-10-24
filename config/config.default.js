const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

exports.build = {
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.avet\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config;
  }
}
