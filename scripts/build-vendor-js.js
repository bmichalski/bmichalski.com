'use strict'

const Promise = require('bluebird')
const uglify = require('uglify-js')
const fs = require('fs-promise')

const paths = require(__dirname + '/paths')

const promise = new Promise(function (resolve) {
  const result = uglify.minify(paths.js.vendor.src)

  resolve(result.code)
})

promise
  .then(function (code) {
    return fs.outputFile(paths.js.vendor.temp, code)
  })
  .then(function () {
    console.log('Vendor JS done')
  })

module.exports = promise
