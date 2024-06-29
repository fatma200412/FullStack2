let start = document.querySelector(".startBtn");
let stop = document.querySelector(".stopBtn");
let count = document.querySelector(".count");
let back = document.querySelector(".backBtn");

let check = true;

// let prom = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Resolve olundu");
//   } else {
//     reject("reject olundu");
//   }
// });

// console.log(prom);
// prom
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Cardlar
let box = document.querySelector(".box");
let getUser = document.querySelector(".getUser");

let myInput = document.querySelector(".myInput");

let arr = [];
// getUser.addEventListener("click", function () {
//   fetch("https://jsonplaceholder.typicode.com/users/5")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // arr = data;
//       data.forEach((elem) => {
//         //   console.log(elem);

//         let newCard = `

//   <div class="card" style="width: 18rem">
//   <img src="..." class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">${elem.name}</h5>
//     <p class="card-text">
//       ${elem.email}
//     </p>
//     <a href="${elem.website}" class="btn btn-primary">${elem.company?.name}</a>
//   </div>
// </div>
//       `;

//         box.innerHTML += newCard;
//       });
//     })
//     .catch((err) => console.log(err));
// });

// console.log(arr);

async function getData() {
  res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();
  console.log(data[0]);
  data.forEach((elem, i) => {
    let newCard = `
      <div class="card" style="width: 18rem">
<img src="${elem.flags.png}" class="card-img-top" alt="..." />
<div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name - <b>${elem.name.common}</b> </li>
    <li class="list-group-item">Capital - ${elem.capital}</li>
    <li class="list-group-item">Population - ${elem.population}</li>
  </ul>
</div>
</div>
      `;

    box.innerHTML += newCard;
  });

  console.log(data);
}
getData();
