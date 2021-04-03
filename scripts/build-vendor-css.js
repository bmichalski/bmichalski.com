'use strict'

const Promise = require('bluebird')
const CleanCss = require('clean-css')
const fs = require('fs-extra')

const cleanCss = new CleanCss()

const paths = require(__dirname + '/paths')

const promise = new Promise(function (resolve, reject) {
  cleanCss.minify(
    paths.css.vendor.src,
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
    return fs.outputFile(paths.css.vendor.temp, styles)
  })
  .then(function () {
    console.log('Vendor CSS done')
  })

module.exports = promise
