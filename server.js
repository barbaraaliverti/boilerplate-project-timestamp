// server.js
// where your node app starts

// init project
var express = require('express');
var helper = require('./helper');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/", function (req, res) {
  res.json({
    unix: Date.parse(new Date()),
    utc: new Date().toUTCString()
  })
})

app.get("/api/:date", (req,res) => {
  let {date} = req.params;
  const dateObj = helper.parseDate(date);
  const dateUnix = helper.convertToUnix(dateObj);
  const dateUTC = helper.convertToUTC(dateObj);
  if (helper.isValidDate(dateObj)) {
    res.json({
      unix: dateUnix,
      utc: dateUTC
    });
  } else {
    res.json({
      error: 'Invalid Date'
    })
  }
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
