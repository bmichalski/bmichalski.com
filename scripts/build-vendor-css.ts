import CleanCss from 'clean-css';
import fs from 'fs-extra';
import chalk from 'chalk';

import { paths } from './paths.js';

export const buildVendorCss = async () => {
  const cleanCss = new CleanCss();

  const output = cleanCss.minify(paths.css.vendor.src);

  const styles = output.styles.replace(/url\("..\/webfonts/g, 'url("../fonts');

  await fs.outputFile(paths.css.vendor.temp, styles);

  console.log(chalk.white.bgGreen('Vendor CSS done'));
};
