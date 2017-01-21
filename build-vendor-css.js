'use strict'

const Promise = require('bluebird')
const CleanCss = require('clean-css')
const fs = require('fs-promise')

const cleanCss = new CleanCss()

const promise = new Promise(function (resolve, reject) {
  cleanCss.minify(
    [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.css'
    ],
    function (err, minified) {
      if (err) {
        return reject(err)
      }

      return resolve(minified.styles)
    })
  })

promise
  .then(function (styles) {
    styles = styles.replace(/url\(node_modules\/font-awesome\/fonts/g, 'url(../fonts')

    return styles
  })
  .then(function (styles) {
    return fs.outputFile('temp/vendor.min.css', styles)
  })
  .then(function () {
    console.log('Vendor CSS done')
  })

module.exports = promise
