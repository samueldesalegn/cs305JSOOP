
/**
 * To run the below prompt one must install the "prompt-sync" 
  using the formula "npm i prompt-sync" from npm package
 */

const prompt = require("prompt-sync")();
const tempInCelsius = prompt("Enter value in celsius: ")
const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
console.log(tempInFahrenheit);


/*

Write a program that computes volume of a cylinder based on user inputs for
radius and height of a cylinder, using formula v = πr2h
 */



const radius = +prompt("Enter radius r in meter: ");
const height = +prompt("Enter the hieght of cylinder: ");
const PI = Math.PI;
// volume = πr2h
const volume = Math.floor(PI*Math.pow(radius, 2)*height);

console.log(volume);


/**
 * Selection (if clause)
 * 
 * If age <= 0
• print "please enter valid age"
• if age is between 0 and 14
• print "You can't drive yet."
• if age is between 15 and 18
• print "You can drive under supervision."
• if age is 19 or higher
• print "You can drive."
 */


const age = +prompt("Enter your age: ");

if (age <= 0) {
	console.log("Enter a valid age!")
}else if (age > 0 && age <= 14) {
	console.log("You can't drive yet");
}else if (age >=15 && age <= 18) {
	console.log("You can drive under supervision.");
}else if (age >= 19) {
	console.log("You can drive.");
}