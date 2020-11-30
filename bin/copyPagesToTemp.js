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
  for (let file of files) {
    let yaml = fs.readFileSync(file, 'utf8');
    let toc = YAML.parse(yaml);
    if (toc.related) {
      for (let related of toc.related) {
        fsExtra.copySync(join(targetDir, related.name), join(targetDir, toc.uuid, related.name));
      }
    }
  }

}

module.exports = copyPagesToTemp;
