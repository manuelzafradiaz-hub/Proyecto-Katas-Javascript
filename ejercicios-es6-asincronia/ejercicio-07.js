const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
const rpgGames = videogames.filter((game) => {
    return game.genders.includes('RPG');
});

const totalRpgScore = rpgGames.reduce((acc, game) => {
    return acc + game.score;
}, 0);
const averageRpgScore = totalRpgScore / rpgGames.length;
console.log(`La puntuación media de los videojuegos de rol es: ${averageRpgScore}`);
console.log(`La puntuación total de los videojuegos de rol es: ${totalRpgScore}`);
console.log(`El número de videojuegos de rol es: ${rpgGames.length}`);