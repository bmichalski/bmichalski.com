'use strict'

module.exports = require(__dirname + '/build-metalsmith')
  .then(function () {
    return Promise.all([
      require(__dirname + '/build-main-css'),
      require(__dirname + '/build-vendor-css'),
      require(__dirname + '/build-vendor-js')
    ]).then(function () {
      return require(__dirname + '/build-copy')
    })
  })
  .then(function () {
    console.log('All done')
  })
