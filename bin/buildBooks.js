'use strict';

const { join } = require('path');

const exec = require('child-process-promise').exec;

const GITBOOK = join(__dirname, '../node_modules/gitbook-cli/bin/gitbook.js');

async function buildBook(sourceDir, targetDir) {
  await exec(`node ${GITBOOK} build -- ${sourceDir} ${targetDir}`).catch((e) =>
    console.log(e)
  );
}

module.exports = buildBook;
