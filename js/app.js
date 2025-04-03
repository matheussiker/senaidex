async function buscarPokemon() {
    const nomePokemon = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error('Pokémon não existe');
        }

        const data = await resposta.json();
        document.getElementById('pokemonInfo').innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
            <p>Altura: ${data.height / 10} m</p>
            <p>Peso: ${data.weight / 10} kg</p>
        `;
    } catch (error) {
        document.getElementById('pokemonInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}