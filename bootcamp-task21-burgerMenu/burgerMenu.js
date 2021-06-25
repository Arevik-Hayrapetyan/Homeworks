const button = document.querySelector(".fa-bars");
const inboxButton = document.querySelector(".inboxButton");

button.addEventListener("click", menuFunction);
inboxButton.addEventListener("click", noteFunction);

function menuFunction(event) {
  const menu = document.querySelector(".menu-links");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block ";
  }
}

function noteFunction(event) {
  const noteContainer = document.querySelector(".note-container");
  const newDiv = document.createElement("div");
  const noteText = document.createElement("p");
  const closeButton = document.createElement("button");
  const wrapperDiv = document.querySelector(".wrapper");

  newDiv.classList.add("note-container");
  noteText.classList.add("noteText");
  closeButton.classList.add("closeButton");

  noteText.innerText = "Hello from Caxkadzor";
  closeButton.innerHTML = '<i class="fas fa-window-close"></i>';
  closeButton.addEventListener("click", closeNote);

  newDiv.style.display = "block";
  newDiv.append(closeButton);
  newDiv.append(noteText);
  wrapperDiv.append(newDiv);

  function closeNote(event) {
    newDiv.style.display = "none";
  }
}
