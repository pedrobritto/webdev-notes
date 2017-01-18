// initializes express and request modules
var express = require("express");
var app = express();

var request = require("request");

// uses .ejs
app.set("view engine", "ejs");

// results route
app.get("/results", function (req, res) {
  var sQuery = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + sQuery;
  
  // getting data from omdbapi.com 
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      // render /results page, where data: data
      res.render("results", {data: data});
    }
  })
})

// root route
app.get("/", function (req, res) {
  res.render("search");
})

// c9 listen args
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server is running...");
})
