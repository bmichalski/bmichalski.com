'use strict'

const Metalsmith  = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts     = require('metalsmith-layouts')
const markdown    = require('metalsmith-markdown')
const permalinks  = require('metalsmith-permalinks')
const pageTitles  = require('metalsmith-page-titles')
const Promise = require('bluebird')

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

const promise = new Promise(function (resolve, reject) {
  Metalsmith(__dirname)
    .metadata({
      sitename: 'bmichalski.io',
      siteurl: 'http://bmichalski.io',
      site: {
        title: 'bmichalski.io'
      },
      authorName: 'Benjamin Michalski'
    })
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(collections({
      posts: {
        sortBy: 'createdAt',
        reverse: true
      }
    }))
    .use(pageTitles())
    .use(markdown({
      breaks: true
    }))
    .use(permalinks({
      relative: false
    }))
    .use(layouts({
      engine: 'handlebars',
      partials: 'partials',
      strict: true
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