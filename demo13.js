var fs = require('fs');

fs.writeFile('today.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});