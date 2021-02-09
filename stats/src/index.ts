import fs from 'fs'; //file system in node.

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
});

console.log(matches);