/*

5. Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and write the down payment amount to
the console

Cost of House Down Payment
$0 to less than 50K      =>  5% of the cost
$50K to less than 100K   =>  $1000 + 10% of (cost - $50K)
$100K to less than 200K  =>  $2000 + 15% of (cost - $100K)
$200K and above          =>  $5000 + 10% of (cost - $200K)

Input:
costOfHouse

Output:
downpayment

steps:
$0 to less than 50K      =>  5% of the cost
$50K to less than 100K   =>  $1000 + 10% of (cost - $50K)
$100K to less than 200K  =>  $2000 + 15% of (cost - $100K)
$200K and above          =>  $5000 + 10% of (cost - $200K)

*/

const prompt = require("prompt-sync")();

let costOfHouse = +prompt("Enter the cost of the house: ");
let downpayment = 0;

if (costOfHouse < 50000) {
	downpayment = 0.05*costOfHouse;
}else if (costOfHouse >= 50000 && costOfHouse < 100000) {
	downpayment = 1000 + 0.1*(costOfHouse - 50000);
}else if (costOfHouse >= 100000 && costOfHouse < 200000) {
	downpayment = 2000 + 0.15*(costOfHouse - 100000);
} else {
	downpayment = 5000 + 0.1*(costOfHouse - 200000);
}

console.log(downpayment)