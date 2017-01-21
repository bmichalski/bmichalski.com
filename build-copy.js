'use strict'

const Promise = require('bluebird')
const fs = require('fs-promise')
const path = require('path')
const globby = require('globby')

const promise = Promise.all([
  fs.copy('temp/vendor.min.css', 'build/css/vendor.min.css'),
  fs.copy('temp/vendor.min.js', 'build/js/vendor.min.js'),
  fs.copy('temp/main.min.css', 'build/css/main.min.css'),
  fs.copy('build/about/index.html', 'build/index.html'),
  fs.copy('src/CNAME', 'build/CNAME'),
  fs.copy('img', 'build/img'),
  globby(__dirname + '/node_modules/font-awesome/fonts/*')
    .then(function (files) {
      const promises = []

      files.forEach(function (file) {
        promises.push(
          fs.copy(file, __dirname + '/build/fonts/' + path.basename(file))
        )
      })

      return Promise.all(promises)
    })
])

promise
  .then(function () {
    console.log('Done copying')
  })

module.exports = promise
