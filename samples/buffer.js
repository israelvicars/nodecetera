// the unmodified buffer object:

fs.readFile('zork.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
    })

// writing the buffer object out using the toString() method:

fs.readFile('zork.txt', function(err, data){
    console.log(data.toString());
    })

// writing out the contents of the buffer object by specifying the encoding:

fs.readFile('zork.txt', 'utf8', function(err, data){
    console.log(data);
    })
