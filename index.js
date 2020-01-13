/*
The destructuring assignment syntax is a JavaScript expression that makes it possible
 to unpack values from arrays, or properties from objects, into distinct variables.

*/

//creation of a person object literal
const person = {
    firstName : `Jon`,
    lastName : `Snow`,
    age :25,
    location :`Beyond the wall`
}

let {firstName,age} = person; // The properties firstName and age were both "unpacked" from the person oject and assign into a variable called firstName, age

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${age}`);

//creation of an array
const movies= ["The Matrix", "Avengers:End Game", "The Dark Knight","Titanic","Lion King"];

let [firstMovie,secondMoive,thirdMovie] = movies; 
//The 1st,2nd and 3rd elements were "unpaked" and to sourced variable(firstMovie,secondMovie,thirdMovie).

console.log(`First Moive : ${firstMovie}`);