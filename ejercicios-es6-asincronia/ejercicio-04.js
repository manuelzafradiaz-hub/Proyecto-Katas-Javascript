//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultAges = ages.filter((age) => {
	return age > 18;
});

console.log(adultAges);

//4.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter((age) => {
	return age % 2 === 0;
});

console.log(evenAges);

//4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamerLOL = streamers.filter((streamer) => {
	return streamer.gameMorePlayed === 'League of Legends';
});

console.log(streamerLOL);

//4.4
const streamersWithU = streamers.filter((streamer) => {
	return streamer.name.includes('u');
});
console.log(streamersWithU);

//4.5
const streamersLegends = streamers.filter((streamer) => {
	const playsLegends = streamer.gameMorePlayed.includes('Legends');

	if (playsLegends && streamer.age > 35) {
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
	}

	return playsLegends;
});

console.log(streamersLegends);