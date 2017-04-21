let fs = require('fs');
let path = 'echo.js';

fs.readFile(path, {encoding: 'utf-8'}, (err, data ) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(err.message);
    } else {
      console.error(err);
    }
  } else {
    console.log(data);
  }
});