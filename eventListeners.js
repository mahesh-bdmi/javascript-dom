const allButtons = document.querySelectorAll(".button-cls button");
const colorButton = document.querySelector(".button-back button");
const bodyElement = document.body;
const colorText = bodyElement.querySelector("div h1");
// for (const button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// }

// allButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     console.log(this);
//   });
// });

//Event Object
allButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if ((e.target.style.backgroundColor = "yellow"))
      this.style.backgroundColor = "teal";
    else if ((e.target.style.backgroundColor = "teal"))
      this.style.backgroundColor = "yellow";
    else e.target.style.backgroundColor = "yellow";
  });
});

const RandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

colorButton.addEventListener("click", function () {
  bodyElement.style.backgroundColor = RandomColor();
  colorText.textContent = bodyElement.style.backgroundColor;
});

bodyElement.addEventListener("keypress", (e) => {
  console.log(e.key);
});

const childElement = document.querySelector(".child");
const parentElement = document.querySelector(".parent");
const grandParentElement = document.querySelector(".grandparent");

childElement.addEventListener(
  "click",
  () => console.log(`You clicked the child`),
  true
);

parentElement.addEventListener(
  "click",
  () => console.log(`You clicked the parent`),
  true
);

grandParentElement.addEventListener(
  "click",
  () => console.log(`You clicked the grandparent`),
  true
);
