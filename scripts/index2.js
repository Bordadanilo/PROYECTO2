    const axios = require('axios') 

    const moviesContainer = document.getElementById('contenedor');

    async function requestMovies() {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        const movies= response.data;
                
        const movieCards = movies.map(movie => {
        const movieCard = document.createElement('div');
            movieCard.classList.add('tarjeta');
                        
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title} Poster">
                <h3>${movie.title} (${movie.year})</h3>
                <p>Director: ${movie.director}</p>
                <p>Duración: ${movie.duration}</p>
                <p>Género: ${movie.genre.join(', ')}</p>
                p>Rating: ${movie.rate}</p>
                `;
                return movieCard;

                });

                movieCards.forEach(movieCard => {
                    moviesContainer.appendChild(movieCard);
                });
}



module.exports = requestMovies;