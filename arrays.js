// const scores = [];
// for (let i=0; i<10; i++)
// scores[i] = Math.ceil(Math.random()*100);

// console.log(scores);

// Write code to create an array named scores and fill it with 5 test scores 10,
// 20, 30, 40 and 50.

// const scores = [];
// for (let i = 0; i < 5; i++) {
// 	scores[i] = (i+1)*10;
	
// }

// /**
//  * 
//  * @param {*} scores 
//  * @returns 
//  */
// function findAverage(scores) {
// 	let sum = 0;
// 	for (const element of scores) {
// 		sum += element;
// 	}
// 	return sum/scores.length;
// // }

// // let avg = findAverage(scores);
// // let val = console.log(avg);
// // console.log(val);

// let age = 10;

// console.log(age);

// function output() {

//   age = 20;

//   console.log(age);

// }

// output();

// // console.log(age);

// function write2file(content) {

// 	fsystem.writeFile("./testWrite.txt", content, function () {});
// }
	
// 	const returnVal = write2file( Math.max(1, 2, 3));
// 	console.log(returnVal)

// Question 4 of 5	2 Points
// function cube(num){ return num * num * num; };

// console.log("expect 0: ", cube(0));

// console.log("expect -1000: ", cube(-10));

// let arr = [];

// console.log(arr);

// Write code to create an array named scores and fill it with 5 test scores 10,
// 20, 30, 40 and 50.

let scores = [];
for (let i = 0; i < 5; i++) {
	scores[i] = (i+1)*10;
	
}
console.log(scores);

// 2. Now write a function named findAverage, that takes an array as an
// argument and return average of the array values.

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function findAverage(arr) {
	let sum = 0;
 for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
 }
 return sum/arr.length;
}

let avg = findAverage(scores);
console.log(avg);

// Create a second array with values from 1 to 9 and find the average of the
// array values.

let arr2 = [];
for (let i = 0; i < 9; i++) {
	arr2[i] = i+1;
	
}
console.log(arr2);
let avg2 = findAverage(arr2);
console.log(avg2);

