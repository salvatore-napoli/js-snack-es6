function randomNumberGen(min, max) {
	var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
	return randomNumber;
}


var footballTeams = [
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
var teamsResult = [];

for (var i = 0; i < footballTeams.length; i++) {
	footballTeams[i].pts = randomNumberGen(1, 150);
	footballTeams[i].fouls = randomNumberGen(1, 50);
}
console.log(footballTeams);

for (var i = 0; i < footballTeams.length; i++) {
	teamsResult.push({
		name: footballTeams[i].name,
		fouls: footballTeams[i].fouls,
	})
}
console.log(teamsResult);
