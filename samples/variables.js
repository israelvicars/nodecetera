var globalFoo;

exports.setFoo = function(val) {
  globalFoo = val;
};

exports.returnFoo = function() {
  console.log(globalFoo);
  return globalFoo;
};
