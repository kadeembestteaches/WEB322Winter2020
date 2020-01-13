const express = require("express"); //this imports the express package that was installed within your application
const fs = require("fs"); //this imports the core fs module




const app = express(); // this creates your express app object

//Route for the Home Page
app.get("/",(req,res)=>{

    //This fetches a static HTML page
    fs.readFile("html/index.html",(err,data)=>{

        if(!err)
        {
            //this set the response header so the browser will do this is an HTML page
            res.setHeader("Content-Type","text/html");

            //parsers the html content
            res.write(data);
            res.end();
        }

        else
        {
            console.log(err);
        }

    })

});

app.get("/about",(req,res)=>{

    const pageName = `About Us`;
    const htmlPage =
    `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Abou Us Page </title>
        </head>
        <body>
            <h1>${pageName}</h1>
            <p>
                This is a dynamic page
            </p>
        </body>
    </html>
    `;

    res.send(htmlPage);

});

app.get("/contact",(req,res)=>{

    res.send("Contact US");
})


const PORT=3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});