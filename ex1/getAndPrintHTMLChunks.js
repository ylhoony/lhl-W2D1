var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    // console.log(response);

    response.on('data', function (data) {
      // data.forEach (function (element) {
        console.log(data);
      // });

    });

    // response.end('end', function () {
    //   console.log('Test End');
    // });

  });
}

getAndPrintHTMLChunks();