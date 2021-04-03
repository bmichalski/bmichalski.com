'use strict'

const Metalsmith     = require('metalsmith')
const collections    = require('metalsmith-collections')
const layouts        = require('metalsmith-layouts')
const markdown       = require('@metalsmith/markdown')
const permalinks     = require('@metalsmith/permalinks')
const pageTitles     = require('metalsmith-page-titles')
const discoverPartials = require('metalsmith-discover-partials')
const Promise        = require('bluebird')
const Handlebars     = require('handlebars')
const HandlebarsIntl = require('handlebars-intl')

HandlebarsIntl.registerWith(Handlebars)

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context')
  console.log('====================')
  console.log(this)

  if (optionalValue) {
    console.log('Value')
    console.log('====================')
    console.log(optionalValue)
  }
})

const paths = require(__dirname + '/paths')

const promise = new Promise(function (resolve, reject) {
  Metalsmith(__dirname)
    .metadata({
      sitename: 'bmichalski.io',
      siteurl: 'https://bmichalski.io',
      site: {
        title: 'bmichalski.io'
      },
      authorName: 'Benjamin Michalski'
    })
    .source(paths.metalsmith.src)
    .destination(paths.metalsmith.dest)
    .clean(true)
    .use(collections({
      posts: {
        sortBy: 'createdAt',
        reverse: true
      }
    }))
    .use(markdown({
      breaks: true
    }))
    .use(pageTitles())
    .use(permalinks({
      relative: false
    }))
    .use(discoverPartials({
      directory: paths.metalsmith.layouts.partials,
      pattern: /\.hbs$/
    }))
    .use(layouts({
      engine: 'handlebars',
      strict: true,
      pattern: '**/*.html',
      directory: paths.metalsmith.layouts.directory,
    }))
    .build(function(err) {
      if (err) {
        return reject(err)
      }

      return resolve()
    })
})

promise
  .then(function () {
    console.log('Build Metalsmith done')
  })

module.exports = promise
