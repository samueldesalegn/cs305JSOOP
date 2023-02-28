/*
 Write a loop that continually prompts for age until you enter age older than 18
• Write both while and do while versions.

 */
const prompt = require("prompt-sync")();
while (true) {

  let value = +prompt("Enter your age: ");

  if (value > 18) break; 

}

// do while option for the same prompt
do {
	let value = +prompt("Enter your age: ");

  if (value > 18) break; 
} while (true);
