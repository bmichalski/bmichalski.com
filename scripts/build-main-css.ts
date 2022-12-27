import CleanCss from 'clean-css';
import fs from 'fs-extra';
import chalk from 'chalk';

import { paths } from './paths.js';

export const buildMainCss = async () => {
  const cleanCss = new CleanCss();

  const output = cleanCss.minify(paths.css.main.src);

  await fs.outputFile(paths.css.main.temp, output.styles);

  console.log(chalk.white.bgGreen('Main CSS done'));
};
