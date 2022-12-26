'use strict'

const CleanCss = require('clean-css')
const fs = require('fs-extra')

const cleanCss = new CleanCss()

const paths = require(__dirname + '/paths')

const promise = new Promise(function (resolve, reject) {
  cleanCss.minify(
    paths.css.main.src,
    function (err, minified) {
      if (err) {
        return reject(err)
      }

      return resolve(minified.styles)
    })
  })

promise
  .then(function (styles) {
    return fs.outputFile(paths.css.main.temp, styles)
  })
  .then(function () {
    console.log('Main CSS done')
  })

module.exports = promise
