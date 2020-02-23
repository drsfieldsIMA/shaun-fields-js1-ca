fetch("https://rickandmortyapi.com/api/character/")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleJson(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".card");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/250";
        let i = 0;
        console.dir(result);
        if (result.image) {
            imageUrl = result.image;
        }

        html += `  <img class="image" src="${imageUrl}" alt="${result.name}">
                            <div class="details">
                                <h4 class="name">${result.name}</h4>
                                <p>Episode count: ${result.episode.length}</p>
                                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                    </div> `
    });

    resultsContainer.innerHTML = html;
}