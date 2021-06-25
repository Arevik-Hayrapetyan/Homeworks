const button = document.querySelector(".fa-bars");
button.addEventListener("click", menuFunction);

function menuFunction(event) {
  const menu = document.querySelector(".menu-links");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block ";
  }
}
