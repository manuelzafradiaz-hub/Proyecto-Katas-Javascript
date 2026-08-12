const selectElement = document.querySelector('#character-list');
const imgElement = document.querySelector('.character-image');

async function getCharacters() {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json();

    for (const character of characters) {
        const option = document.createElement('option');
        option.textContent = character.fullName;
        option.value = character.imageUrl;
        selectElement.appendChild(option);
    }
}

selectElement.addEventListener('change', () => {
    imgElement.src = selectElement.value;
});

getCharacters();