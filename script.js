let ApiKey = '5f203800f14737a944702abee8a9b75e';

let URL = 'https://api.themoviedb.org/3/search/movie'

let urlImg = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click', buscarPelicula)

function buscarPelicula() {
    let peliculaIngresada = document.getElementById('searchInput').value

    fetch(`${URL}?api_key=${ApiKey}&query=${peliculaIngresada}`)
        .then(response => response.json())
        .then(response => cargarPeliculas(response.results))
}



function cargarPeliculas(movies) {

    let contenedorPeliculas = document.getElementById('results');

    contenedorPeliculas.innerHTML = "";

    if (movies.length === 0) {
        contenedorPeliculas.innerHTML = '<p>No se encontraron resultados para la busqueda.</p>';
        return
    } else {
        movies.forEach(movie => {
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie')

            let titulo = document.createElement('h2');
            titulo.textContent = movie.title

            let lanzamiento = document.createElement('p');
            lanzamiento.textContent = `Fecha de lanzamiento: ${movie.release_date}`

            let descripcion = document.createElement('p');
            descripcion.textContent = `Descripcion: ${movie.overview}`

            let srcPoster = urlImg + movie.poster_path

            let poster = document.createElement('img')
            poster.src = srcPoster

            movieDiv.appendChild(poster)
            movieDiv.appendChild(titulo)
            movieDiv.appendChild(lanzamiento)
            movieDiv.appendChild(descripcion)

            contenedorPeliculas.appendChild(movieDiv)
        });
    }
}




