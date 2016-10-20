### MongoDB/Mongoose setup in MEN stack

``` js
// initialize
var mongoose = require('mongoose');

// connect with mongodb
mongoose.connect('mongodb://localhost/db_name');

// basic model configuration
var nameSchema = new mongoose.Schema ({
  title: String,
  image: String,
  number: Number
  // etc...
  });

// use model configuration
var Name = mongoose.model('Name', nameSchema);

// now can use Name var with methods
// i.e.
Name.create({ 
  title: "Hello, world",
  image: "http://url.com/img.jpeg",
  number: 119
  },
  function(err, name) {
    if (err) {
      // handler
    } else {
      // handler
    }
  });
```
