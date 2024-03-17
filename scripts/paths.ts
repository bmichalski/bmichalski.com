import fs from 'fs-extra';
import * as url from 'node:url';
import path from 'node:path';

const root = await fs.realpath(
  `${path.dirname(url.fileURLToPath(import.meta.url))}/../`
);

const buildDirectory = `${root}/docs`;

export const paths = {
  root,
  index: {
    src: `${buildDirectory}/about/index.html`,
    dest: `${buildDirectory}/index.html`,
  },
  not_found: {
    src: `${buildDirectory}/page-not-found/index.html`,
    src_folder: `${buildDirectory}/page-not-found`,
    dest: `${buildDirectory}/404.html`,
  },
  metalsmith: {
    src: `${root}/src`,
    dest: `${buildDirectory}`,
    layouts: {
      directory: `${root}/layouts`,
      partials: `${root}/partials`,
    },
  },
  css: {
    main: {
      src: ['css/main.css'],
      temp: `${root}/temp/main.min.css`,
      dest: `${buildDirectory}/css/main.min.css`,
    },
    vendor: {
      src: [
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/@fortawesome/fontawesome-free/css/brands.css',
        'node_modules/@fortawesome/fontawesome-free/css/solid.css',
        'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
      ],
      temp: `${root}/temp/vendor.min.css`,
      dest: `${buildDirectory}/css/vendor.min.css`,
    },
  },
  js: {
    vendor: {
      src: [
        `${root}/node_modules/@popperjs/core/dist/umd/popper.js`,
        `${root}/node_modules/bootstrap/dist/js/bootstrap.js`,
      ],
      temp: `${root}/temp/vendor.min.js`,
      dest: `${buildDirectory}/js/vendor.min.js`,
    },
  },
  cname: {
    src: `${root}/src/CNAME`,
    dest: `${buildDirectory}/CNAME`,
  },
  img: {
    src: `${root}/img`,
    dest: `${buildDirectory}/img`,
  },
  favicon: {
    src: `${root}/src/favicon.ico`,
    dest: `${buildDirectory}/favicon.ico`,
  },
  fonts: {
    vendor: {
      fontAwesome: {
        srcGlob: `${root}/node_modules/@fortawesome/fontawesome-free/webfonts/*`,
        destPrefix: `${buildDirectory}/fonts/`,
      },
    },
  },
};
