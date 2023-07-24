const getGames = async () => {
    try {
        let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': GAMES_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}


(async () => {
    const allGamesListToDisplay = await getGames();
    // console.log(allGamesListToDisplay);
    const gameContainer = document.querySelector('.all-games');
    let searchValue = document.querySelector("input").value;

    // Store the HTML elements in an array.
    const gameCards = allGamesListToDisplay.map(game => {
        let card = document.createElement('div');

        card.innerHTML = `
  <div class="col card bg-secondary" style="width: 18rem;">
  <img src="${game.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.title}</h5>
    <p class="card-text">${game.short_description}</p>
    <a href="${game.game_url}" class="btn btn-dark">See Game</a>
  </div>
</div>`;
        return card;
    });

    // Append each card to the DOM.
    gameCards.forEach(card => {
        gameContainer.appendChild(card);
    });


    //search function
    document.querySelector('.searchBTN').addEventListener('click', () => {
        let searchValue = document.querySelector("input").value;
        allGamesListToDisplay.forEach(game => {
            if (game.title.toLowerCase() === searchValue.toLowerCase()) {
                gameContainer.innerHTML = `
  <div class="col card bg-secondary" style="width: 18rem;">
  <img src="${game.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.title}</h5>
    <p class="card-text">${game.short_description}</p>
    <a href="${game.game_url}" class="btn btn-dark">See Game</a>
  </div>
</div>`;
            }
        })
    })


})()
