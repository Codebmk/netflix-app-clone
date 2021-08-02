import moviesList from "../data-store/movies.js";
import movieGenresData from "../data-store/genres.js";
const moviesListDiv1 = document.querySelector(".movies-list-1");
const moviesListDiv2 = document.querySelector(".movies-list-2");
const movieGenres = document.querySelectorAll(".genres-list");

movieGenres.forEach(elem => {
  movieGenresData.forEach(genre => {
    const genreItem = document.createElement("li");
    genreItem.className = "genres-list-item";
    genreItem.textContent = genre;
    elem.appendChild(genreItem);
  });
});

// add movie items to section 1
for (let i = 0; i <= Math.floor(moviesList.length / 2); i++) {
  const movieItemDiv = document.createElement("div");
  movieItemDiv.className = "movie-list-item";
  movieItemDiv.innerHTML = `
        <img src="assets/${moviesList[i].img}" alt="${moviesList[i].title}" class="movie-img"/>
        <div class="movie-info">
            <h3 class="movie-title">${moviesList[i].title}</h3>
            <div class="movie-rating">
                <h3 class="movie-release-year">2018</h3>
                <div class="movie-other-info">
                    <ion-icon name="heart"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="eye"></ion-icon>
                </div>
            </div>
        </div>
    `;
  moviesListDiv1.appendChild(movieItemDiv);
}

// add movie items to section 2
for (
  let i = moviesList.length - 1;
  i > Math.floor(moviesList.length / 2);
  i--
) {
  const movieItemDiv = document.createElement("div");
  movieItemDiv.className = "movie-list-item";
  movieItemDiv.innerHTML = `
        <img src="assets/${moviesList[i].img}" alt="${moviesList[i].title}" class="movie-img"/>
        <div class="movie-info">
            <h3 class="movie-title">${moviesList[i].title}</h3>
            <div class="movie-rating">
                <h3 class="movie-release-year">2018</h3>
                <div class="movie-other-info">
                    <ion-icon name="heart"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="eye"></ion-icon>
                </div>
            </div>
        </div>
    `;
  moviesListDiv2.appendChild(movieItemDiv);
}

document.querySelector("#nav-menu").addEventListener("click", () => {
  document.querySelector("#nav-links").classList.toggle("nav-link-toggle-show");
});
