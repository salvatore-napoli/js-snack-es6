const arrayNames = ['A', 'B', 'C', 'D', 'E'];

function numbersBetween(arr, numA, numB) {
	const newArray = [];
	arr.forEach((elem, index) => {
		if (index >= numA && index <= numB) {
			newArray.push(index);
		}
	});
	return newArray;
}

console.log(numbersBetween(arrayNames, 2, 4));
