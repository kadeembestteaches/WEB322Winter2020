/*
    An arrow function expression is a syntactically compact alternative to a regular 
    function expression, although without its own bindings to the this 
*/

/*
Example of an arrow function.
The below function calculate the cube of a number

*/
const calculateCube = (num)=>
{
    return num1**3;
}

// calculateCube (6) -this is how you call the function

/*
    The above function can be written short becuase :
    -Parentheses are optional when there's only one parameter name. 
    Please note, if there is no parameter or more than one, you must put the parentheses
*/

const calculateCube2 = num=>{

    return num**3;
}

/*
    The above function can be written even shorter because if the body of the function 
    has one startment then the { } is optional and the return statement is no longer needed
  */

 const calculateCube3 = num=> num**3;

 /*
    Also, see below for a function with no parameters and one statment:

 */
 const displayMessage = ()=> console.log(`Hi,Welcome to WEB322!`);
