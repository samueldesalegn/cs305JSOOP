/*

Write a JavaScript program to prompt for an integer and compute the sum of all the digits.

*/

const prompt = require("prompt-sync")();

let num = +prompt("Enter a number: ");


let sum=0;
while(num!=0) {
		sum = sum + num%10;
		num = Math.floor(num/10);
}
console.log(sum);
