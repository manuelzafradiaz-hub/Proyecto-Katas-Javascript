async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomId);
    const pokemon = await response.json();

    const imgElement = document.querySelector('.random-image');
    imgElement.src = pokemon.sprites.other['official-artwork'].front_default; //Busque la forma de como hacer las imagenes más grandes para darle una pequeña mejora.
}
getRandomPokemon();