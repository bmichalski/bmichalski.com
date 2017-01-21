'use strict'

const Promise = require('bluebird')
const uglify = require('uglify-js')
const fs = require('fs-promise')

const promise = new Promise(function (resolve) {
  const result = uglify.minify([
    'node_modules/jquery/dist/jquery.slim.js',
    'node_modules/tether/dist/js/tether.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])

  resolve(result.code)
})

promise
  .then(function (code) {
    return fs.outputFile('temp/vendor.min.js', code)
  })
  .then(function () {
    console.log('Vendor JS done')
  })

module.exports = promise
