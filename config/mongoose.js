const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect('mongodb+srv://mpv33:uV7Pe6CLrRFw4Eb2@cluster0.8jpev.mongodb.net/contact_list_db?retryWrites=true&w=majority');
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;
