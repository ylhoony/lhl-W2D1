var https = require('https');





function getAndPrintHTML (options) {

  /* Add your code here */

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var bufferedData = ' ';

    response.on('data', function(data) {

        bufferedData += data;

    });


    response.on('end', function() {
      console.log(bufferedData);
    });


  });



}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);