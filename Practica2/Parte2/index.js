var express = require("express");
var app = express();
const api = require('./api')
const resta = require('./resta')
const multi = require('./multi')
const div = require('./div')

//create a server object:
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
  res.render("index");
  var convert = req.query.convert;
  api.query(`${convert}`, "Calculadora").then(xmlResult => res.render('results', {data: xmlResult}));

  var convert = req.query.convert;
  resta.query(`${convert}`, "Calculadora").then(xmlResult => res.render('results', {data: xmlResult}));

  var convert = req.query.convert;
  div.query(`${convert}`, "Calculadora").then(xmlResult => res.render('results', {data: xmlResult}));

  var convert = req.query.convert;
  multi.query(`${convert}`, "Calculadora").then(xmlResult => res.render('results', {data: xmlResult}));
});

app.listen(process.env.PORT || 8080, process.env.IP, function() {
  console.log("Server is listening on http://localhost:8080");
});