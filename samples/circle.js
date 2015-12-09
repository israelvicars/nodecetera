// circle.js using the exports statement

var PI = Math.PI;

exports.area = function(r){
  return PI * r * r;
}

exports.circumference = function(r){
  return 2 * PI * r;
}

// accessing the exported functions
var circle = require('./circle.js');

circle.area(4);
circle.circumference(4);
