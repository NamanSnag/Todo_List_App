const express = require('express');

const path = require('path');

// port were server is running
const port = 80;

// data base connection
const db = require('./config/mongoose');

const app = express();

// set up ejs template engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// urlencoded add to extract data from form
app.use(express.urlencoded({ extended:true }));

// adding Style file
app.use('/static', express.static('./Static'));

// add all the routes
app.use('/',require('./routes'));

// server made port 80
app.listen(port, (error)=>{
    if(error){
        return console.error(error);
    }
    console.log("server listening on port " , port);
});
