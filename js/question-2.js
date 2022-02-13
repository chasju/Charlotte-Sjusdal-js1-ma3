const urlTWO =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=326f406bc83046a7af9ac27c297b62bf";

const html = document.querySelector("article");

async function getResults() {
  const response = await fetch(urlTWO);

  const results = await response.json();

  html.innerHTML = "";

  for (let i = 0; i < results.results.length; i++) {
    if (i === 8) {
      break;
    }

    html.innerHTML += `<div class="result name">${results.results[i].name}</div>`;
    html.innerHTML += `<div class="result">Rating: ${results.results[i].rating}</div>`;
    html.innerHTML += `<div class="result tag">Number of tags: ${results.results[i].tags.length}</div>`;
  }
}

getResults();
