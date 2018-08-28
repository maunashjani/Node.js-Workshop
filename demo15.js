var fs = require('fs');

fs.rename('sample4.txt', 'sample4_renamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});