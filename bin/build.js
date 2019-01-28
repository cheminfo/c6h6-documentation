'use strict';

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
  copyPagesToTemp(sourceDir, pagesTmpDir);
  buildSummary(pagesTmpDir);
  await buildPagesAndTips(pagesTmpDir, targetDir, layoutDir);
  await buildBooks(sourceDir, join(targetDir, 'book'));
}
