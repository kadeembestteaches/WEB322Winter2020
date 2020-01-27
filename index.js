const express = require("express"); //this imports the express package that was installed within your application

const app = express(); // this creates your express app object

const exphbs= require("express-handlebars");

const productModel = require("./model/product");



//This tells express to set up our template engine has handlebars
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");



app.use(express.static("public"));

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

    res.render("products",{
        title:"Products",
        headingInfo: "Products Page",
        products :productModel.getAllProducts()

    });
   
});



const PORT=3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});