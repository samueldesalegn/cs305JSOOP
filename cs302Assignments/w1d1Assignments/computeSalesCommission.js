/*
 Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500

Input: salary, rate, sales
Output: commission
Steps:
a) salaried

below $300 => no commission
between $300 and 500 => 1%
above 500 => 2%

b) not salaried
between $300 and 500 => 2%
above 500 => 3%
 */

const prompt = require("prompt-sync")();

let sales = +prompt("Enter your sales amount: ");
let salary = +prompt("Enter the salary amount: ");
let commission = 0;

if (sales <= 300) {
	console.log("These is no commission for sales below $300")
}else {
	if (salary) {
		if (sales > 300 && sales < 500) {
			commission = 0.01*sales;
		}else if (sales >= 500) {
			commission = 0.02*sales;
		}
	}else {
		if (sales > 300 && sales < 500) {
			commission = 0.02*sales;
		}else if (sales >= 500) {
			commission = 0.03*sales;
		}
	}
	console.log(commission);

}








