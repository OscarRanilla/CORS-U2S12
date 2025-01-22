//Hacemos un fetch

function getPokemonInfo() {
    const pokemonNameInput = document.getElementById('pokemonName');
    const pokemonInfo = document.getElementById('pokemonInfo');

    const pokemonName = pokemonNameInput.value.toLocaleLowerCase()

    fetch(`http://localhost:3002/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
        const {name, sprites: {front_default}, height, weight} = data
        pokemonInfo.innerHTML = `
        <h2>${name}</h2>
        <img src="${front_default}" alt="${name}"/>
        <p><strong>Altura:</strong> ${height}</p> 
        <p><strong>Peso:</strong> ${weight}</p>
        `
    })
    .catch(error => pokemonInfo.innerHTML = `<p>Imposible acceder al pokemón</p>`)
}