/**
 * 
 * @param {*} arrExp 
 */

function isBalanced(arrExp){
	let expStack = [];

	for (const bracket of arrExp) {
		if (bracket === "{") {
			expStack.push(bracket);
		}else {
			let popBracket = expStack.pop();
			if (arrExp !== "}") {
				
			}
		} 
	}
}


// Consider the following algorithm. Will it solve the problem? (test it by hand with the examples below)
// - Use a for .. of loop with the expression array
// - push any left bracket onto a new array, expressionStack
// - on a right bracket pop the expressionStack and check that return value is a left bracket
// -- using the array as a stack
// - if not, then not balanced
// - if stack empty at end then balanced, else not balanced

/**
 * push and pop methods are efficient way of adding and removing elements from an array
 * shift and unshift are not efficient because of the reindexing. 
 */