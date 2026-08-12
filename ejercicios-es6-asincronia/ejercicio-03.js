//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];
const userNames = users.map((user) => user.name);
console.log(userNames);

//3.2

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const modifiedNames = users2.map((user) => {
	if (user.name.startsWith('A')) {
		return 'Anacleto';
	} else {
		return user.name;
	}
});

console.log(modifiedNames);

//3.3

const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];
const visitedCities = cities.map((city) => {
	if (city.isVisited) {
		return city.name + ' (Visitado)';
	} else {
		return city.name;
	}
});

console.log(visitedCities);