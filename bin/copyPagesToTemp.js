'use strict';

const fs = require('fs');

const fsExtra = require('fs-extra');
const Find = require('find');
const YAML = require('yaml');

const { join, dirname } = require('path');

function copyPagesToTemp(sourceDir, targetDir) {
  fsExtra.mkdirpSync(targetDir);
  let files = Find.fileSync(/index.yml/, sourceDir);
  for (let file of files) {
    let dir = dirname(file);
    let yaml = fs.readFileSync(file, 'utf8');
    let toc = YAML.parse(yaml);
    if (toc.uuid) {
      fsExtra.copySync(dir, join(targetDir, toc.uuid));
    }
  }
}

module.exports = copyPagesToTemp;
