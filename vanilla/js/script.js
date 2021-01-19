// Snack 1
var bikeList = [
	{
	'name': 'red',
	'weight': 7,
	},
	{
	'name': 'blue',
	'weight': 8,
	},
	{
	'name': 'green',
	'weight': 6,
	},
];

var min = bikeList[0];

for (var i = 1; i < bikeList.length; i++) {
	if (bikeList[i].weight < min.weight) {
		min = bikeList[i];
	}
}

console.log(min);
