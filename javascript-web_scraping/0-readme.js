#!/usr/bin/node

const arg = process.argv[2];
const fs = require('fs');

fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});