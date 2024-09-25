let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let input = document.getElementById("input");

let todos = [];

window.onload = () => {
 todos = JSON.parse(localStorage.getItem('todos')) || [];
}

button.addEventListener("click", () => {
  todos.push(input.value);
  console.log(todos);
  // callback function
  addtodo(input.value);
  // after this we emptying the input box
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todoList.appendChild(para);
  // storing in local storage 
  localStorage.setItem('todos', JSON.stringify(todos))
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    // removing form the todos array
    remove(todo);
  });

  para.addEventListener("dblclick", () => {
    // removing 'p' element inside todoList container div
    todoList.removeChild(para);
    remove(todo);
  });
}

// removing element from todos array
function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) todos.splice(index, 1);
}
