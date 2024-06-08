let helloBtn = document.querySelector(".helloBtn");

// helloBtn.addEventListener("click", salamla);

// function salamla(e) {
//   //   console.log("Salamlar");
//   //   console.log(e);
//   //   console.log(e.target);
//   //   console.log(e.target.innerText);
//   //   e.target.innerText = "sagol";
//   //   console.log(e.target.innerText);
//   console.log(e.type);
//   e.preventDefault();
// }

// // helloBtn.onclick = () => {
// //   console.log("first");
// // };

let myForm = document.querySelector(".myForm");
let myInput = document.querySelector(".myInput");

// myForm.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(myInput.value);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("yuklenir....");
// });

// document.removeEventListener()

let box = document.querySelector(".box");
let childBox = document.querySelector(".childBox");

// box.addEventListener("click", function () {
//   console.log("box");
// });

// childBox.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("childBox");
// });

let itemBox = document.querySelector(".itemBox");

// itemBox.addEventListener("mouseover", function () {
//   console.log("first");
// });

// itemBox.addEventListener("mouseout", function () {
//   console.log("first");
// });

// itemBox.addEventListener("mouseenter", function () {
//   console.log("first");
// });

// itemBox.addEventListener("mouseleave", function () {
//   console.log("first");
// });

// document.addEventListener("keypress", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keyup", function (e) {
//   console.log(e.key);
//   console.log(e.keyCode);
// });

let input = document.querySelector("#input");

// input.addEventListener("focus", function () {
//   console.log("focus olundu");
// });

// input.addEventListener("copy", function () {
//   console.log("kopyalandi");
// });

// input.addEventListener("paste", function () {
//   console.log("yapisdirildi");
// });

// input.addEventListener("cut", function () {
//   console.log("cut");
// });

// input.addEventListener("select", function () {
//   console.log("secildi");
// });

// input.addEventListener("blur", function () {
//   console.log("secildi");
// });

// input.addEventListener("input", function () {
//   //   helloBtn.innerHTML = input.value;

//   console.log(input.value);

//   str = "";
//   for (let elem of input.value) {
//     str += "*";
//   }
//   input.value = str;
// });

let arr = [];
helloBtn.addEventListener("click", function () {
  arr.push(input.value);
  console.log(arr);
  input.value = "";
});
