function mostrarDatos() {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=or')
    .then(res => res.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        data.results.forEach(result => {
            const id = document.createElement('li');
            id.textContent = result.id;

            const title = document.createElement('li');
            title.textContent = result.title;

            const price = document.createElement('li');
            price.textContent = result.price;

            const itemDiv = document.createElement('div');
            itemDiv.appendChild(id);
            itemDiv.appendChild(title);
            itemDiv.appendChild(price);

            resultsDiv.appendChild(itemDiv);
        });
    })
    .catch(error => console.log('Error:', error));
}
