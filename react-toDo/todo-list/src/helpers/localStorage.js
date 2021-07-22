export default function setItem(items) {
    localStorage.setItem("todoList", JSON.stringify(items));
  }
  
  export function getItem() {
    return JSON.parse(localStorage.getItem("todoList"));
  }