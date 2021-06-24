const todoInput = document.querySelector(".todo");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const inputText = document.querySelector(".to-doInput");

todoButton.addEventListener("click", addTodo);

// todoList.addEventListener("click", doneCheck);
//Functions

//Creating nrw div for adding new input
function addTodo(event) {
  const newDiv = document.createElement("div");
  //Creating li tag part for adding

  newDiv.classList.add("todo");

  const newTodo = document.createElement("input");
  newTodo.value = document.querySelector(".to-doInput").value;
  newTodo.setAttribute("disabled", "true");
  newTodo.classList.add("todo-element");
  newDiv.appendChild(newTodo);
  //Creating edit Button
  const editButton = document.createElement("button");
  editButton.addEventListener("click", editCheck);
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add("edit-button");
  newDiv.appendChild(editButton);
  // Creating check Button
  const checkButton = document.createElement("button");
  checkButton.addEventListener("click", doneCheck);

  checkButton.innerHTML = '<i class="fas fa-clipboard-check"></i>';
  checkButton.classList.add("check-button");

  newDiv.appendChild(checkButton);
  // Creating trash Button
  const trashButton = document.createElement("button");
  trashButton.addEventListener("click", deleteCheck);
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashButton.classList.add("trash-button");
  newDiv.appendChild(trashButton);

  // All appending to todoList
  todoList.appendChild(newDiv);
  //Clear todo input value
  inputText.value = " ";
}
//Edit function 
function editCheck(event){
  const newTodo = document.querySelector(".todo-element");
  newTodo.removeAttribute("disabled")
}
//Delete function
function deleteCheck(event) {
  const todoInput = document.querySelector(".todo");
  todoInput.remove();
}
//Done function
function doneCheck(event) {
  const todoElement = document.querySelector(".todo-element");
  todoElement.style.textDecoration = "line-through";
}
