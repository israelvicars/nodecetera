// the logger function (a.k.a. *console.log*):
var logger = function(d) {
    process.stdout.write(d + '\n');
}

// the forEach loop to display arguments passed to the node executable:
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// the tick.js file used to illustrate the timing sequence of the nextTick function:
console.log('start');
process.nextTick(function() { console.log('nextTick callback'); });
console.log('scheduled');
