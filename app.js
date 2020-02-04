const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');


const app = express();

//Set Handlebars as the Express enginge for the app
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
        
        res.render("home",{
                title : "Home Page"
        })

});


app.get("/contactus",(req,res)=>{

        res.render("contact",{
                title : "Contact Page"
        })
});

//Handle the post data
app.post("/contactus",(req,res)=>{

        const errorMessages = [];

        //validation
        if(req.body.firstName=="")
        {
                errorMessages.push("You must enter first name");
        }

        if(req.body.lastName=="")
        {
                errorMessages.push("You must enter last name");
        }

        if(req.body.message=="")
        {
                errorMessages.push("You must enter message");
        }


        //If the user does not enter all the information
        if(errorMessages.length >0 )
        {
                res.render("contact",{
                        title : "Contact Page",
                        errors : errorMessages
                
                });
        }


        //If the user enters all the data and submit the form
        else
        {
                //descturing
                const {firstName,lastName} =req.body;
                res.render("contact",{
                        title : "Contact Page",
                        successMessage :`Thank you ${firstName} ${lastName}
                        we received your information and will contact you shortly`
                });

        }
   
});

const PORT = 3000;
app.listen(PORT , ()=>
{
        console.log(`Web application is up and running!!!`);
});