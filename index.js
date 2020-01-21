const express = require("express"); //this imports the express package that was installed within your application

const app = express(); // this creates your express app object

const exphbs= require("express-handlebars");



//This tells express to set up our template engine has handlebars
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");





//Route for the Home Page
app.get("/",(req,res)=>{

   
    res.render("index",{
        title:"Home",
        headingInfo: "Home Page"

    });

});

app.get("/contact-us",(req,res)=>{

    res.render("contact",{
        title:"Contact",
        headingInfo: "Contact Us Page"

    });


});

app.get("/products",(req,res)=>{


    const fakeDB= []

    fakeDB.push({title:'XPS 13',description:`Our smallest 13-inch laptops feature a virtually 
    borderless InfinityEdge display and up to 10th gen Intel® processors. 
    Touch, silver, rose gold and frost options available
    `,price:`1349.99`});

    fakeDB.push({title:'XPS 15',description:`Powerhouse performance with the latest processors and NVIDIA 
    graphics paired with a stunning 4K Ultra HD display.
    
    `,price:`1749.99`});

    fakeDB.push({title:'XPS 17',description:`XPS 17 is designed to keep you entertained for more than 9 hours 
    with a 9-cell battery upgrade.`,price:`1949.99`});

    res.render("products",{
        title:"Products",
        headingInfo: "Products Page",
        products :fakeDB

    });
   
});



const PORT=3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});