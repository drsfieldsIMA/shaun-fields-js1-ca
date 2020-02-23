const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const charactersUrl = `https://rickandmortyapi.com/api/character/`;
const detailUrl = `${charactersUrl}${id}`;

console.log(detailUrl);
fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCharacter(json);
    })
    .catch(function() {
     document.location.href = "error.html";
    });

function createCharacter(json) {
  //  console.dir(json);

    // get the loader div
    const loader = document.querySelector(".breadcrumb-nav");
    // hide the loader
    loader.style.display = "none";

    // get detail container div
    const detailContainer = document.querySelector(".detail-container");
    // remove the hidden class
    detailContainer.classList.remove("hidden");

    const image = document.querySelector(".details-image");
    image.alt = json.name;

    // set the img.src property depending on what properties are available in the JSON
    if (json.image) {
        image.src = json.image;
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://via.placeholder.com/250";
    }

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const gameCount = document.querySelector("#status");
    gameCount.innerHTML = json.status;

    const description = document.querySelector("#species");
    description.innerHTML = json.species;

    const originName = document.querySelector("#origin");
    originName.innerHTML = json.origin.name;

    const locationName = document.querySelector("#location");
    locationName.innerHTML = json.location.name;

    document.title = json.name + " | " + document.title;
}
