var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
          throw err;
       })
       .on('response', function(res) {
          console.log('Downloading image...');
          console.log("Response Code: " + res.statusMessage);
          console.log("Content Type: " + res.headers['content-type']);
          console.log('Download complete.');

       })
       .pipe(fs.createWriteStream('./future.jpg'));


