// console.log(1);

// console.log(3);

// setTimeout(() => {
//   console.log(2);
// }, 500);
// setInterval(() => {
//   console.log("first");
// }, 500);

let start = document.querySelector(".startBtn");
let stop = document.querySelector(".stopBtn");
let count = document.querySelector(".count");
let back = document.querySelector(".backBtn");

let timer;

start.addEventListener("click", function () {
  timer = setInterval(() => {
    console.log(count.textContent++);
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
});

let timeOut = setTimeout(() => {
  console.log("salam");
}, 2000);


clearTimeout(timeOut);
back.addEventListener("click", function () {
  console.log(count.textContent--);
});
