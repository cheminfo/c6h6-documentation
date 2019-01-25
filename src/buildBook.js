'use strict';

const fs = require('fs');

const fsExtra = require('fs-extra');

const { join } = require('path');

const exec = require('child-process-promise').exec;

const GITBOOK = join(__dirname, '../node_modules/gitbook-cli/bin/gitbook.js');
build();

async function build() {
  await exec(
    `cd "${__dirname}" && node ${GITBOOK} build -- book ../build/book`
  ).catch((e) => console.log(e));
}
