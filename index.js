const express = require("express"); //this imports the express package that was installed within your application

const app = express(); // this creates your express app object


//this function returns the HTML (with injected data) for every web page
const htmlTemplate = obj =>
{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${obj.title}</title>
    </head>
    <body>
            <header>
                <h1>${obj.headingInfo}</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
            <main>
                ${obj.HTML}
            </main>
            <footer>
                Created by WEB322
            </footer>
    </body>
</html>`;

}


//Route for the Home Page
app.get("/",(req,res)=>{

    const data =
    {
        title: `Home Page`,
        headingInfo :`Home Page`,
        HTML:
        `<section>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi laboriosam 
                ipsum quis eveniet nemo iusto.
            </p>
        </section>`
    };


    res.send(htmlTemplate(data));
   

});

app.get("/contact-us",(req,res)=>{


    const data =
    {
        title: `Contact Us`,
        headingInfo :`Contact Us`,
        HTML:
        `
        <section>
            <form method="POST" action="/contact-us">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName"> <br>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName"> <br>

                <label for="phoneNo">Phone No</label>
                <input type="text" id="phoneNo" name="phoneNo"> <br>

                <label for="message">Message</label>
                <textarea type="text" id="message" name="message"></textarea>

                <input type="submit" value="Contact Us">
            </form>
        </section>`
    };

    res.send(htmlTemplate(data));

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

    let htmlSnippet=``;

    //pulls data from database and bill the html string that will be injected into the section
    for(let i=0; i<fakeDB.length; i++)
    {
        htmlSnippet+=
        ` <div>
                <p>Product Title :${fakeDB[i].title} </p>
                <p>Price : ${fakeDB[i].price} </p>
                <p>Description : ${fakeDB[i].description} </p>
          </div>
        `;
    }

    const data =
    {

        title: `Products`,
        headingInfo :`Products`,
        HTML:
        `
        <section>
            ${htmlSnippet}
        </section>`
    };

    res.send(htmlTemplate(data));
});

const PORT=3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});