
// /**
//  * To run the below prompt one must install the "prompt-sync" 
//   using the formula "npm i prompt-sync" from npm package
//  */

// const prompt = require("prompt-sync")();
// const tempInCelsius = prompt("Enter value in celsius: ")
// const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
// console.log(tempInFahrenheit);


// /*

// Write a program that computes volume of a cylinder based on user inputs for
// radius and height of a cylinder, using formula v = πr2h
//  */



// const radius = +prompt("Enter radius r in meter: ");
// const height = +prompt("Enter the hieght of cylinder: ");
// const PI = Math.PI;
// // volume = πr2h
// const volume = Math.floor(PI*Math.pow(radius, 2)*height);

// console.log(volume);


// /**
//  * Selection (if clause)
//  * 
//  * If age <= 0
// • print "please enter valid age"
// • if age is between 0 and 14
// • print "You can't drive yet."
// • if age is between 15 and 18
// • print "You can drive under supervision."
// • if age is 19 or higher
// • print "You can drive."
//  */


// const age = +prompt("Enter your age: ");

// if (age <= 0) {
// 	console.log("Enter a valid age!")
// }else if (age > 0 && age <= 14) {
// 	console.log("You can't drive yet");
// }else if (age >=15 && age <= 18) {
// 	console.log("You can drive under supervision.");
// }else if (age >= 19) {
// 	console.log("You can drive.");
// }

function myFunc() {
	console.log("Oh happy Day")
}

let val = myFunc();
// console.log(val);

// if ("false") console.log(0); else console.log(1);

// function sum(n1, n2) {
// 	return n1 + n2;
// }

// console.log(sum(5))


// function testPrime(num) {
// 	if (!num ) return;
// 	for (let i = 2; i < num; i++) {
// 		if (num%i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(testPrime());

// let x = 10;
// function main() {
// 	let x;
// 	console.log("x1: " + x);
// 	if (x > 0) {
// 		let x = 30;
// 		console.log("x2: " + x);
// 	}
// 	x= 40;
// 	let f = function(x) { console.log("x3: " + x); }
// 	f(50);
// }
// main();

// function a(){ 
// 	console.log(x); // consult Global for x and print 20 from Global
// }
// function b(){ 
// 	let x = 10; 
// 	a(); // consult Global for a
// 	console.log(x); 
// } 
// let x = 20; 
// b();

/*
Write a function to compute area of a triangle based on the following formula
• computeArea = √s(s−a)(s−b)(s−c)
• where a, b and c are the lengths of the three side of a triangle and s is the semi-perimeter of the 
triangle defined by following formula
• s = (a+b+c)/2;
• write a separate function for computing semi-perimeter.
• parameters for computeArea will be the lengths of the triangle sides: a, b, c
• Start with a “defining table”


Input: a, b, c
Output: area of the triangle

Steps:
compute s => semi-perimeter
compute the formula
return area
 */

// function computeTriangleArea(a, b, c) {

// 	function semiPerimeter() {
// 		return (a+b+c)/2;
// 	}

// 	let s = semiPerimeter();
// 	let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// 	return area;
	
// }


// console.log(computeTriangleArea(3, 4, 5));

// /**
//  * 
//  * @param {*} name 
//  */
// function hello(name) {
//   let phrase = `Hello, ${name}!`;

//   debugger;  // <-- the debugger stops here

//   say(phrase);
// }