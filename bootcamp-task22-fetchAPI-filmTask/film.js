
const container = document.querySelector(".container");
fetch("https://ghibliapi.herokuapp.com/films")
.then((result) => result.json())
.then((data) => {
    data.forEach((item) => {
        const filmContainer = `<div class="filmContainer">
    <div class="title-container"><label for="title" class = "name-color">Title :</label>
    <span id="title">${item.title}</span></div>
   <br>

    <div class="description-container">
    <label for="description" class = "name-color">Description: </label>
    <div id="description">${item.description}</div>
    </div>
    <br>
   <div class="director-container"> <label for="director" class = "name-color">Director: </label>
   <div id="director">${item.director}</div></div>
   <br>
  <div class="producer-container"> <label for="director" class = "name-color">Director: </label>
  <div id="director">${item.director}</div></div>
  <br>
  <div class="release_date-container"><label for="release_date" class = "name-color">Release-Data: </label>
  <div id="release_date">${item.release_date}</div></div>
    </div>`;

      container.insertAdjacentHTML("beforeend", filmContainer);
    });
  });
