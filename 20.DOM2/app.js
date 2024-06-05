console.log(window);
console.log(window.document);
console.log(document.location);
console.log(document.body.children);

const main = document.querySelector(".main");
const text = document.querySelector(".text");

console.log(text);
console.log(text.parentElement);
console.log(text.parentElement.parentElement);
console.log(text.parentElement.parentElement.parentElement);

console.log(text.nextElementSibling);

const div = document.createElement("div");
div.className = "divElement";
div.style.border = "1px solid black";
div.style.width = "100px";
div.style.height = "100px";
div.innerHTML = "Hello";

console.log(div);

document.body.appendChild(div);
