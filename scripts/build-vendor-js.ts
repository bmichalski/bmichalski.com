import * as uglify from 'uglify-js';
import fs from 'fs-extra';
import chalk from 'chalk';

import { paths } from './paths.js';

export const buildVendorJs = async () => {
  const contents = await Promise.all(
    paths.js.vendor.src.map((fileName) => fs.readFile(fileName, 'utf8'))
  );

  const result = uglify.minify(contents);

  if (result.error) {
    throw result.error;
  }

  await fs.outputFile(paths.js.vendor.temp, result.code);

  console.log(chalk.white.bgGreen('Vendor JS done'));
};
