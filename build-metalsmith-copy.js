'use script'

module.exports = require(__dirname + '/build-metalsmith')
  .then(function () {
    return require(__dirname + '/build-copy')
  })