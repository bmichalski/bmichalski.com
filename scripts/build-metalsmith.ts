import Metalsmith from 'metalsmith';
import collections from '@metalsmith/collections';
import layouts from '@metalsmith/layouts';
import Handlebars from 'handlebars';

import path from 'node:path';
import * as url from 'node:url';
import chalk from 'chalk';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import markdown from '@metalsmith/markdown';
// @ts-ignore
import permalinks from '@metalsmith/permalinks';
// @ts-ignore
import pageTitles from 'metalsmith-page-titles';
// @ts-ignore
import discoverPartials from 'metalsmith-discover-partials';
// @ts-ignore
import HandlebarsIntl from 'handlebars-intl';
/* eslint-enable @typescript-eslint/ban-ts-comment */

import { paths } from './paths.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
HandlebarsIntl.registerWith(Handlebars);

Handlebars.registerHelper('debug', function (this: any, optionalValue: any) {
  console.log('Current Context');
  console.log('====================');
  // eslint-disable-next-line no-invalid-this
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});

export const buildMetalsmith = async () => {
  const instance = Metalsmith(path.dirname(url.fileURLToPath(import.meta.url)))
    .metadata({
      sitename: 'bmichalski.com',
      siteurl: 'https://bmichalski.com',
      site: {
        title: 'bmichalski.com',
      },
      authorName: 'Benjamin Michalski',
    })
    .source(paths.metalsmith.src)
    .destination(paths.metalsmith.dest)
    .clean(true)
    .use(
      collections({
        posts: {
          pattern: 'posts/**/*.html',
          metadata: undefined,
          filterBy: () => true,
          sortBy: 'createdAt',
          reverse: true,
          limit: Number.POSITIVE_INFINITY,
          refer: true,
        },
      })
    )
    .use(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call
      markdown({
        breaks: true,
      })
    )
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call
    .use(pageTitles())
    .use(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call
      permalinks({
        relative: false,
      })
    )
    .use(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call
      discoverPartials({
        directory: paths.metalsmith.layouts.partials,
        pattern: /\.hbs$/,
      })
    )
    .use(
      layouts({
        engineOptions: {
          strict: true,
        },
        pattern: '**/*.html',
        directory: paths.metalsmith.layouts.directory,
      })
    );

  await new Promise<void>((resolve, reject) => {
    instance.build((error) => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });
  });

  console.log(chalk.white.bgGreen('Build Metalsmith done'));
};
