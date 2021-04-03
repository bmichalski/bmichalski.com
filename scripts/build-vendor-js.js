'use strict'

const Promise = require('bluebird')
const uglify = require('uglify-js')
const fs = require('fs-extra')

const paths = require(__dirname + '/paths')

const promise = Promise
  .all(
    paths.js.vendor.src.map(function (fileName) {
      return fs.readFile(fileName, 'utf8')
    })
  ).then(function (contents) {
    return new Promise(function (resolve, reject) {
      const result = uglify.minify(contents)

      if (result.error) {
        reject(result.error)

        return
      }

      resolve(result.code)
    })
  })
  .then(function (code) {
    return fs.outputFile(paths.js.vendor.temp, code)
  })
  .then(function () {
    console.log('Vendor JS done')
  })

module.exports = promise
