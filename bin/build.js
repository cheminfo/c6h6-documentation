'use strict';

const { mkdirpSync } = require('fs-extra');

const { join } = require('path');

const copyPagesToTemp = require('./copyPagesToTemp');
const buildPagesAndTips = require('./buildPagesAndTips');
const buildSummary = require('./buildSummary');
const buildBooks = require('./buildBooks');

let pagesTmpDir = join(__dirname, '..', 'temp/pages');
let sourceDir = join(__dirname, '../src/book');
let targetDir = join(__dirname, '../build');
let layoutDir = join(__dirname, '../src/layouts');

build();

async function build() {
    mkdirpSync(targetDir);
    console.log('copy pages to temp');
  copyPagesToTemp(sourceDir, pagesTmpDir);
    console.log('build summary');
  buildSummary(pagesTmpDir);
    console.log('build pages and tips');
  await buildPagesAndTips(pagesTmpDir, targetDir, layoutDir);
    console.log('build books');
  await buildBooks(sourceDir, join(targetDir, 'book'));
}
