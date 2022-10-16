// const randomColor = () => {
//   return (
//     "#" +
//     Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, "0")
//       .toUpperCase()
//   );
// };

// const navItems = document.getElementsByTagName("a");

// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = randomColor();
// }

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const doBtn = todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const newTodoInnerHTML = `<span class="todo-text">${todoInput.value}</span>
  <div class="todo-buttons"><button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button></div>`;
  newTodo.innerHTML = newTodoInnerHTML;
  todoList.appendChild(newTodo);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const newTodoText =
      (e.target.parentNode.previousElementSibling.style.textDecoration =
        "line-through");
  } else if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  }
});
