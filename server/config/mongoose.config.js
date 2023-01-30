const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/redBelt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("You are connected to the database!"))
    .catch( err => console.log("Can't connect to the database!", err));