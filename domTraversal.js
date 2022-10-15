const rootNode = document.getRootNode();
const htmlNode = rootNode.childNodes[0];
const headNode = htmlNode.childNodes[0];
const headChildren = headNode.Children;
const textNode = htmlNode.childNodes[1];
const bodyNode = htmlNode.childNodes[2];
console.log(headNode.childNodes[0].nextElementSibling.nextElementSibling);

console.log(headNode.childNodes); //returns all the children including text nodes
console.log(headNode.children); //returns only element nodes
