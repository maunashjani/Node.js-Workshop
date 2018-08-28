var fs = require('fs');

fs.open('today.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});