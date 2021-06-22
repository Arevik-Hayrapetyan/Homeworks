const nextButton = document.querySelector(".slider-right");
const prevButton = document.querySelector(".slider-left");
let index = 0; //start point
let images = document.querySelectorAll(".slides"); //images list

nextButton.onclick = function () {
  next("next");
};
prevButton.onclick = function () {
  next("prev");
};
function next(direction) {
  if (direction === "next") {
    if (index === images.length - 1) {
      index = 0;
      images[index].style.display = "block";
      images[images.length - 1].style.display = "none";
      return;
    }
    images[index + 1].style.display = "block";

    images[index].style.display = "none";
    index++;
  }
  if (direction === "prev") {
    if (index === 0) {
      index = images.length - 1;
      images[0].style.display = "none";
      images[index].style.display = "block";
      return;
    }
    images[index - 1].style.display = "block"
    images[index].style.display = "none"
    index--

  }
}


