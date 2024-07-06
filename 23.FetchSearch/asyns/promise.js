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

let searchBtn = document.querySelector(".searchBtn");
let searchInp = document.querySelector(".searchInp");

async function getData() {
  res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();
  console.log(data[0]);
  data.forEach((elem, i) => {
    // get data
    let newCard = `
      <div class="card" style="width: 18rem">
<img src="${elem.flags.png}" class="card-img-top" alt="..." />
<div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name - <b>${elem.name.common}</b> </li>
    <li class="list-group-item">Capital - ${elem.capital}</li>
    <li class="list-group-item">Population - ${elem.population}</li>
    <li class="list-group-item "><button type="button" id=${elem.id} class="btn btn-info info">Info</button></li>

  </ul>
</div>
</div>
      `;

    // info btn

    let infoBtn = document.querySelectorAll(".info");

    infoBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        console.log("fgh");
        fetch(`https://restcountries.com/v3.1/all/${this.id}`)
          .then((res) => res.json())
          .then((data) => {
            
          });
      });
    });

    box.innerHTML += newCard;
  });

  // btn ile axtaris
  searchBtn.addEventListener("click", function () {
    console.log(searchInp.value);
    box.innerHTML = "";
    data.forEach((elem) => {
      if (
        elem.name.common.toLowerCase().includes(searchInp.value.toLowerCase())
      ) {
        console.log(elem.name.common);
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
      }
    });
  });

  // inputun her herfine gore axtaris
  searchInp.addEventListener("input", function () {
    console.log(searchInp.value);
    box.innerHTML = "";
    data.forEach((elem) => {
      if (elem.name.common.toLowerCase().includes(searchInp.value)) {
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
      }
    });
  });
}
getData();
