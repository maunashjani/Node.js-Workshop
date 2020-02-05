var fs = require('fs');

fs.appendFile('sample2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});