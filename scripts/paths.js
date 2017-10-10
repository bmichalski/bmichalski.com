'use strict'

const fs = require('fs')

const root = fs.realpathSync(__dirname + '/../')

module.exports = {
  root: root,
  index: {
    src: root + '/build/about/index.html',
    dest: root + '/build/index.html'
  },
  not_found: {
    src: root + '/build/page-not-found/index.html',
    src_folder: root + '/build/page-not-found',
    dest: root + '/build/404.html',
  },
  metalsmith: {
    src: root + '/src',
    dest: root + '/build',
    layouts: {
      directory: root + '/layouts',
      partials: root + '/partials'
    }
  },
  css: {
    main: {
      src: [
        'css/main.css'
      ],
      temp: root + '/temp/main.min.css',
      dest: root + '/build/css/main.min.css'
    },
    vendor: {
      src: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.css'
      ],
      temp: root + '/temp/vendor.min.css',
      dest: root + '/build/css/vendor.min.css'
    }
  },
  js: {
    vendor: {
      src: [
        root + '/node_modules/jquery/dist/jquery.slim.js',
        root + '/node_modules/popper.js/dist/umd/popper.js',
        root + '/node_modules/bootstrap/dist/js/bootstrap.min.js'
      ],
      temp: root + '/temp/vendor.min.js',
      dest: root + '/build/js/vendor.min.js'
    }
  },
  cname: {
    src: root + '/src/CNAME',
    dest: root + '/build/CNAME'
  },
  img: {
    src: root + '/img',
    dest: root + '/build/img'
  },
  favicon: {
    src: root + '/src/favicon.ico',
    dest: root + '/build/favicon.ico'
  },
  fonts: {
    vendor: {
      fontAwesome: {
        srcGlob: root + '/node_modules/font-awesome/fonts/*',
        destPrefix: root + '/build/fonts/'
      }
    }
  }
}
