let productsBox = document.querySelector(".products");
let removeAll = document.querySelector(".removeAll");
fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let arr = JSON.parse(localStorage.getItem("basket"));
    console.log(arr);

    data.forEach((element) => {
      arr.forEach((id) => {
        if (id == element.id) {
          productsBox.innerHTML += `
          <div class="card" style="width: 18rem">
             <img src="${element.image}" class="card-img-top" alt="..." />
             <div class="card-body">
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">${element.price}</li>
                 <li class="list-group-item">
                   <button class="btn btn-warning " name="${element.id}">Delete</button>
                 </li>
                 <li class="list-group-item">
                   <button class="btn btn-danger" name="${element.id}">Wishlist</button>
                 </li>
               </ul>
             </div>
            </div>
                 `;

          removeAll.addEventListener("click", function () {
            console.log("first");
          });
        }
      });
    });
  });
