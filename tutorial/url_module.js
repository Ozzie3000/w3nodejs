//Built-in URL module
//To use the URL module use this method: require()
//This module breaks up the web address into useable parts
//To parse an address use url.parse()
//It returns an URL object parts of the address as properties\

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'