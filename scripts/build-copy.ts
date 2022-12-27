import fs from 'fs-extra';
import path from 'node:path';
import globby from 'globby';
import chalk from 'chalk';

import { paths } from './paths.js';

export const buildCopy = async () => {
  await Promise.all([
    fs.copy(paths.css.vendor.temp, paths.css.vendor.dest),
    fs.copy(paths.js.vendor.temp, paths.js.vendor.dest),
    fs.copy(paths.css.main.temp, paths.css.main.dest),
    fs.copy(paths.index.src, paths.index.dest),
    fs.copy(paths.cname.src, paths.cname.dest),
    fs.copy(paths.img.src, paths.img.dest),
    fs.copy(paths.favicon.src, paths.favicon.dest),
    fs
      .move(paths.not_found.src, paths.not_found.dest)
      .then(() => fs.remove(paths.not_found.src_folder)),
    globby(paths.fonts.vendor.fontAwesome.srcGlob).then((files) => {
      const promises = [];

      for (const file of files) {
        promises.push(
          fs.copy(
            file,
            paths.fonts.vendor.fontAwesome.destPrefix + path.basename(file)
          )
        );
      }

      return Promise.all(promises);
    }),
  ]);

  console.log(chalk.white.bgGreen('Done copying'));
};
