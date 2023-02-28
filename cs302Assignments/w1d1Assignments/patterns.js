// Everything in one row
for(let i = 1; i<=6; i++){
	let row="";
	for(let j=1; j<=6; j++){
	row += i;
	}
	console.log(row);
}

// Upward pyramid 
for(let i = 1; i<=6; i++){
	let row="";
	for(let j=1; j<=i; j++){
	row += i;
	}
	console.log(row);
}


// Downward pyramid
for (let i = 6; i >= 1; i--) {
	let row = ""
	for (let j = 1; j <= i; j++) {
		row += i;
	}
	console.log(row);
	
}