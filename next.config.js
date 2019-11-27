const path = require('path')

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.extensions.unshift(isServer
      ? '.server.js'
      : '.client.js')
    config.resolve.modules.push(path.resolve('./'))

    return config
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: process.env.PWD,
  },
}