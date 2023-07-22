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

// (async () => {
//     const allGamesListToDisplay = await getGames();
//     // console.log(allGamesListToDisplay);
//
//
//     allGamesListToDisplay.map(game => {
//         let card = document.createElement('div');
//
//         card.innerHTML = `
//   <div class="card col" style="width: 18rem;">
//   <img src="${game.thumbnail}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${game.title}</h5>
//     <p class="card-text">${game.short_description}</p>
//     <a href="${game.game_url}" class="btn btn-primary">See Game</a>
//   </div>
// </div>`
//         return card;
//     });
//
//     for (let game of allGamesListToDisplay) {
//         document.querySelector('.all-games').appendChild(game);
//     }
//
//
// })()
(async () => {
    const allGamesListToDisplay = await getGames();
    // console.log(allGamesListToDisplay);

    // Store the HTML elements in an array.
    const gameCards = allGamesListToDisplay.map(game => {
        let card = document.createElement('div');

        card.innerHTML = `
  <div class="col card" style="width: 18rem;">
  <img src="${game.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.title}</h5>
    <p class="card-text">${game.short_description}</p>
    <a href="${game.game_url}" class="btn btn-primary">See Game</a>
  </div>
</div>`;
        return card;
    });

    // Append each card to the DOM.
    const gameContainer = document.querySelector('.all-games');
    gameCards.forEach(card => {
        gameContainer.appendChild(card);
    });
})()
