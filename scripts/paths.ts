import fs from 'fs-extra';
import * as url from 'node:url';
import path from 'node:path';

const root = await fs.realpath(
  `${path.dirname(url.fileURLToPath(import.meta.url))}/../`
);

export const paths = {
  root,
  index: {
    src: `${root}/build/about/index.html`,
    dest: `${root}/build/index.html`,
  },
  not_found: {
    src: `${root}/build/page-not-found/index.html`,
    src_folder: `${root}/build/page-not-found`,
    dest: `${root}/build/404.html`,
  },
  metalsmith: {
    src: `${root}/src`,
    dest: `${root}/build`,
    layouts: {
      directory: `${root}/layouts`,
      partials: `${root}/partials`,
    },
  },
  css: {
    main: {
      src: ['css/main.css'],
      temp: `${root}/temp/main.min.css`,
      dest: `${root}/build/css/main.min.css`,
    },
    vendor: {
      src: [
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/@fortawesome/fontawesome-free/css/brands.css',
        'node_modules/@fortawesome/fontawesome-free/css/solid.css',
        'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
      ],
      temp: `${root}/temp/vendor.min.css`,
      dest: `${root}/build/css/vendor.min.css`,
    },
  },
  js: {
    vendor: {
      src: [
        `${root}/node_modules/@popperjs/core/dist/umd/popper.js`,
        `${root}/node_modules/bootstrap/dist/js/bootstrap.js`,
      ],
      temp: `${root}/temp/vendor.min.js`,
      dest: `${root}/build/js/vendor.min.js`,
    },
  },
  cname: {
    src: `${root}/src/CNAME`,
    dest: `${root}/build/CNAME`,
  },
  img: {
    src: `${root}/img`,
    dest: `${root}/build/img`,
  },
  favicon: {
    src: `${root}/src/favicon.ico`,
    dest: `${root}/build/favicon.ico`,
  },
  fonts: {
    vendor: {
      fontAwesome: {
        srcGlob: `${root}/node_modules/@fortawesome/fontawesome-free/webfonts/*`,
        destPrefix: `${root}/build/fonts/`,
      },
    },
  },
};