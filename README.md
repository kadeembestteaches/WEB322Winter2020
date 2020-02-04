# WEB322Winter2020
## Handling Form submitted data with body-parser
This Project has 3 routes. :
  * "/" (Home Route) - When a user navigates to this route they will be taken to the Home page 
  * "/contact" (Contact Us Route)- When a user navigates to this route they will be taken to a contact us form.
  * "/contact" (post)- The user will only be take to the contact post route when they submit the contact us form. This routes does the following:
    * Validates the forms:
     1. If the user violates the validation, the application will inject an array of errors into the view 
     2. If the user does not violate the validation, the application will inject a welcome message.
  
Please note, after you download this project to your computer, open it in VS Code, then open the terminal and lastly run the command **npm install**. That command is needed to download the node_modules folder into your project so that you run it!
