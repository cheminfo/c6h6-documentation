'use strict';

const fs = require('fs');

const fsExtra = require('fs-extra');

const { join } = require('path');

const exec = require('child-process-promise').exec;

const GITBOOK = join(__dirname, '../node_modules/gitbook-cli/bin/gitbook.js ');

build();

async function build() {
  await exec(`node ${GITBOOK} build -- pages ../build/tips`);
  //  var stdout = result.stdout;
  //  var stderr = result.stderr;

  await exec(`node ${GITBOOK} build -- book ../build/book`);

  const homedir = join(__dirname, 'pages');
  const sourceLayouts = join(homedir, 'template', '_layouts');
  let dirs = fs.readdirSync(homedir).filter((item) => item.length === 32);
  for (let dir of dirs) {
    console.log('Processing: ', dir);
    let summary = join(homedir, dir, 'SUMMARY.md');
    let readme = join(homedir, dir, 'README.md');
    if (fs.existsSync(summary) && fs.existsSync(readme)) {
      // we temporary copy the layout
      let layouts = join(homedir, dir, '_layouts');
      if (fs.existsSync(layouts)) fsExtra.removeSync(layouts);
      fs.mkdirSync(layouts);
      fsExtra.copySync(sourceLayouts, layouts);
      await exec(
        `cd tips; node ${GITBOOK} build -- ${dir} ../../build/pages/${dir}`
      );
      fsExtra.removeSync(layouts);
    }
  }
}
