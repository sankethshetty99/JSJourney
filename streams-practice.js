// streams-practice

const fs = require('fs');

('use strict');
const read = fs.createReadStream('demofile1');

read.on('data', (data) => {
	console.log('data emitted: ', data);
});

read.on('end', () => {
	console.log('Finished reading');
});
