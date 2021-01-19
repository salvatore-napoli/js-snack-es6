function randomNumberGen(min, max) {
	let randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
	return randomNumber;
}


const footballTeams = [
	{
		name: 'Barcellona',
		pts: 0,
		fouls: 0,
	},
	{
		name: 'Real Madrid',
		pts: 0,
		fouls: 0,
	},
	{
		name: 'Siviglia',
		pts: 0,
		fouls: 0,
	},
];
const teamsResult = [];

for (let i = 0; i < footballTeams.length; i++) {
	footballTeams[i].pts = randomNumberGen(1, 150);
	footballTeams[i].fouls = randomNumberGen(1, 50);
}

console.log(footballTeams);

for (var i = 0; i < footballTeams.length; i++) {
		const {name, fouls} = footballTeams[i];
		teamsResult.push({
			name,
			fouls,
		});
}
console.log(teamsResult);
