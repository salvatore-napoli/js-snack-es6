function numbersBetween(arr, numA, numB) {
	var i = 0;
	while (arr.length < ((numB - numA) + 1)) {
		if (i >= numA && i <= numB) {
			arr.push(i);
		}
		i++;
	}
	return arr;
}


var numbers = [];

console.log(numbersBetween(numbers, 3, 10));
