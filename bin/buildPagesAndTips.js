'use strict';

const fs = require('fs');

const { copy, remove } = require('fs-extra');

const { join } = require('path');

const exec = require('child-process-promise').exec;

const GITBOOK = join(__dirname, '../node_modules/gitbook-cli/bin/gitbook.js');

async function buildPagesAndTips(sourceDir, targetDir, layoutDir) {
  const pagesDir = join(targetDir, 'pages');
  const tipsDir = join(targetDir, 'tips');
  const tipsLayout = join(join(layoutDir, 'tips'));
  const pagesLayout = join(join(layoutDir, 'pages'));

  await copy(tipsLayout, join(sourceDir, '_layouts'));
  await exec(`node ${GITBOOK} build -- ${sourceDir} ${tipsDir}`);
  //  var stdout = result.stdout;
  //  var stderr = result.stderr;

  let dirs = fs.readdirSync(sourceDir).filter((item) => item.length === 32);
  for (let dir of dirs) {
    console.log('Processing: ', dir);
    let summary = join(sourceDir, dir, 'SUMMARY.md');
    let readme = join(sourceDir, dir, 'README.md');
    if (fs.existsSync(summary) && fs.existsSync(readme)) {
      // we temporary copy the layout
      let layouts = join(sourceDir, dir, '_layouts');
      if (fs.existsSync(layouts)) await remove(layouts);
      fs.mkdirSync(layouts);
      await copy(pagesLayout, layouts);
      await exec(
        `node ${GITBOOK} build -- ${join(sourceDir, dir)} ${join(
          pagesDir,
          dir
        )}`
      ).catch( (e) => {
          console.log('Build excpeption: ',e);
          console.log(e.stdout);
      });
    }
  }
}

module.exports = buildPagesAndTips;
