function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        const name = data.name;
        const abilities = data.abilities.map(ability => ability.ability.name);
        const gameIndices = data.game_indices.map(index => index.version.name);
        const weight = data.weight;
        const height = data.height;

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Habilidades:</strong> ${abilities.join(', ')}</p>
        <p><strong>Índices de juego:</strong> ${gameIndices.join(', ')}</p>
        <p><strong>Peso:</strong> ${weight} hectogramos</p>
        <p><strong>Altura:</strong> ${height} decímetros</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}