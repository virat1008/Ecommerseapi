const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error "));

db.once('open', function(){
    console.log('Connected to Database');
});

module.exports = db;