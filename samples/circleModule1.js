// using module.exports to demonstrate the same functionality
var PI = Math.PI;

module.exports = function(r){
  return {
    area: function(){
      return PI * r * r;
    },
    circumference: function(){
      return 2 * PI * r;
    }
  }
}
