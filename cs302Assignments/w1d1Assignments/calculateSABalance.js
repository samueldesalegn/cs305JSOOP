/*
Make a defining table and program to print out the balance of a savings account that
compounds interest monthly. Prompt the user for the
a) Input:
• initial amount
• annual interest rate
• number of years to compound

b) output:
balance 

c) steps:
initialAmount; interestRate, numberOfYears

balance = initialAmount* pow((1 + interestRate/12),12*numberOfYears);

*/

const prompt = require("prompt-sync")();

let initialAmount = +prompt("Enter your initial saving amount: ");
let interestRate = +prompt("Enter the annual interest rate: ");
let numberOfYears = +prompt("Enter the number of years elapsed: ");

let balance = initialAmount * Math.pow((1 + interestRate/12),12*numberOfYears);
balance = balance.toFixed(2);

console.log(balance);

