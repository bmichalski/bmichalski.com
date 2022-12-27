import chalk from 'chalk';

import { buildMetalsmith } from './build-metalsmith.js';
import { buildMainCss } from './build-main-css.js';
import { buildVendorCss } from './build-vendor-css.js';
import { buildVendorJs } from './build-vendor-js.js';
import { buildCopy } from './build-copy.js';

await buildMetalsmith();

await Promise.all([buildMainCss(), buildVendorCss(), buildVendorJs()]);

await buildCopy();

console.log(chalk.white.bgGreen('All done'));
