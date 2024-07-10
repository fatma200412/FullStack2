let loginForm = document.querySelector(".loginForm");
let nameInp = document.querySelector(".nameInp");
let passInp = document.querySelector(".passInp");

let base_url = "http://localhost:3000/";

let productBox = document.querySelector(".products");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    name: nameInp.value,
    password: passInp.value,
  };
  console.log(newUser);

  fetch(base_url + "users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let find = false;
      for (let element of data) {
        if (
          element.name == newUser.name &&
          element.password == newUser.password
        ) {
          console.log("xos geldiniz");
          find = true;
        }
      }

      if (!find) {
        console.log("sifre veya istifadeci adi yalnisdir");
      }
    });
});
fetch(base_url + "products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      productBox.innerHTML += `
      <div class="card" style="width: 18rem">
 <img src="${element.image}" class="card-img-top" alt="..." />
 <div class="card-body">
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${element.price}</li>
     <li class="list-group-item">
       <button class="btn btn-warning basket" name="${element.id}">Basket</button>
     </li>
     <li class="list-group-item">
       <button class="btn btn-danger" name="${element.id}">Wishlist</button>
     </li>
   </ul>
 </div>
</div>
     `;
    });

    let basketBtns = document.querySelectorAll(".basket");

    let arr;

    if (localStorage.getItem("basket")) {
      arr = JSON.parse(localStorage.getItem("basket"));
    } else {
      arr = [];
    }

    for (let btn of basketBtns) {
      btn.addEventListener("click", function () {
        console.log(this.name);
        arr.push(this.name);
        console.log(arr);

        localStorage.setItem("basket", JSON.stringify(arr));
      });
    }
  });
