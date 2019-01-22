'use strict';

const fs = require('fs');
const join = require('path').join;

const YAML = require('yaml');

const homedir = join(__dirname, 'src');

let dirs = fs.readdirSync(homedir).filter((item) => item.length === 32);

let summary = [];
summary.push('# Table of contents\n');
summary.push('[Introduction](README.md)\n');

for (let dir of dirs) {
  let file = join(homedir, dir, 'index.yml');
  if (fs.existsSync(file)) {
    let yaml = fs.readFileSync(file, 'utf8');
    let toc = YAML.parse(yaml);
    summary.push(`## ${toc.description}\n`);
    let tips = toc.tips.sort((a, b) => a.index - b.index);
    for (let tip of tips) {
      if (!tip.index || !tip.title || !tip.name) {
        console.log(
          'tip.index, tip.title and tip.name are mandatory',
          dir,
          tip
        );
        continue;
      }
      let linkFile = join(homedir, dir, tip.name, 'index.md');
      if (!fs.existsSync(linkFile)) {
        console.log('The file does not exist: ', linkFile);
      }
      summary.push(`${tip.index}. [${tip.title}](${dir}/${tip.name}/index.md)`);
    }
    summary.push('');
  }
}

let summaryFile = join(homedir, 'SUMMARY.md');
fs.writeFileSync(summaryFile, summary.join('\n'));
