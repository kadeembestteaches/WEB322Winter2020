//imports
const express = require("express");
const  exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


//creation of app object
const app = express();


//handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

//loading static assests middleware
app.use(express.static("public"));


//define your routes for the exam here



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`The Server is up and runing`)
});

