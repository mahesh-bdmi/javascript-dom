const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

const todoSection = document.getElementsByClassName("todo-section");
// console.log(todoSection);

const head = document.getElementsByTagName("head");
// console.log(head);

const navtext = document.querySelector("span.todo-text");
// console.log(todoText.textContent);
// console.log(todoText.innerText);
// console.log(todoText.outerHTML);

const navItems2 = document.getElementsByClassName("nav-item"); //gives a HTML collection and array like object, can only use for loop
// console.log(navItems2[1]); //can access individual items using index

const navItems = document.querySelectorAll("a");
// console.log(navItems);

navItems.forEach((navItem) => {
  navItem.style.backgroundColor = "teal";
});

const heading = document.querySelector(".headline");
// console.log(heading.innerHTML);
heading.innerHTML = "<h1>javaScript Manupulation</h1>";
heading.innerHTML += '<button class="heading-button">Another button</button>';
// console.log(heading.innerHTML);

const sectionTodo = document.querySelector(".todo-section");
sectionTodo.classList.add("bg-dark");
sectionTodo.classList.remove("bg-dark");
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
// console.log(sectionTodo.classList.contains("bg-dark"));

// static list vs live list
const staticList = document.querySelectorAll(".todo-list li");
const liveList = document.getElementsByTagName("li");
console.log(staticList);
console.log(liveList);

//add elements to HTML
const todoList = document.querySelector(".todo-list");
const todoListItem = todoList.querySelector("li");

const todolistItem2 = todoListItem.cloneNode(true);
todoList.append(todolistItem2);
todolistItem2.children[0].textContent = "Hello";
