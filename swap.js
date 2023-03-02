// function swap() {
// 	let temp = x;
// 	x = y;
// 	y = temp;

// }

function swap(x, y) {
	[x, y]  = [y, x];

}


let x = 5;
let y = 10;
swap(x, y)
console.log("expect 10, 5", x, y);