'use strict'

const fs = require('fs-extra')
const path = require('path')
const globby = require('globby')

const paths = require(__dirname + '/paths')

const promise = Promise.all([
  fs.copy(paths.css.vendor.temp, paths.css.vendor.dest),
  fs.copy(paths.js.vendor.temp, paths.js.vendor.dest),
  fs.copy(paths.css.main.temp, paths.css.main.dest),
  fs.copy(paths.index.src, paths.index.dest),
  fs.copy(paths.cname.src, paths.cname.dest),
  fs.copy(paths.img.src, paths.img.dest),
  fs.copy(paths.favicon.src, paths.favicon.dest),
  fs.move(paths.not_found.src, paths.not_found.dest)
    .then(function () {
      return fs.remove(paths.not_found.src_folder)
    }),
  globby(paths.fonts.vendor.fontAwesome.srcGlob)
    .then(function (files) {
      const promises = []

      files.forEach(function (file) {
        promises.push(
          fs.copy(
            file,
            paths.fonts.vendor.fontAwesome.destPrefix + path.basename(file)
          )
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
