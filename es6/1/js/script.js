// Snack 1
const bikeList = [
	{
	'name': 'Red',
	'weight': 7,
	},
	{
	'name': 'Blue',
	'weight': 8,
	},
	{
	'name': 'Green',
	'weight': 6,
	},
];

let min = bikeList[0];

for (let i = 1; i < bikeList.length; i++) {
	if (bikeList[i].weight < min.weight) {
		min = bikeList[i];
	}
}

const {name, weight} = min;

console.log(`La bicicletta meno pesante è ${name} e pesa ${weight} kg.`);
