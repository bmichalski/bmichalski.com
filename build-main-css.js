'use strict'

const Promise = require('bluebird')
const CleanCss = require('clean-css')
const fs = require('fs-promise')

const cleanCss = new CleanCss()

const promise = new Promise(function (resolve, reject) {
  cleanCss.minify(
    [
      'css/main.css',
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
    return fs.outputFile('temp/main.min.css', styles)
  })
  .then(function () {
    console.log('Main CSS done')
  })

module.exports = promise
