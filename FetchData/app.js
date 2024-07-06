let getDataBtn = document.querySelector(".getData");
let sortByUsername = document.querySelector(".sortByUsername");
let sortById = document.querySelector(".sortById");
let clearAll = document.querySelector(".clearAll");

let tbody = document.querySelector("tbody");

getDataBtn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        tbody.innerHTML += `
              <tr>
                  <th scope="row">${user.id}</th>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address?.city}</td>
                  <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
                  <td>
                  <button type="button" id=${user.id} class="btn btn-outline-success learnMore">Learn More</button>
                  </td>
                </tr>
            `;

        // learn more
        let infoBtns = document.querySelectorAll(".learnMore");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            console.log(this.id);
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.name,
                  text: `${data.address?.street}, ${data.address?.suite}`,
                  footer: data.phone,
                });
              });
          });
        });
      });
    });
  sortByUsername.addEventListener("click", function () {
    tbody.innerHTML = "";
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        const sortedUsers = users.sort((x, y) => x.name.localeCompare(y.name));
        sortedUsers.forEach((user) => {
          tbody.innerHTML += `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address?.city}</td>
                <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
                <td>
                <button type="button" id=${user.id} class="btn btn-outline-success learnMore">Learn More</button>
                </td>
              </tr>
          `;

          // learn more
          let infoBtns = document.querySelectorAll(".learnMore");
          infoBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
              console.log(this.id);
              fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  Swal.fire({
                    title: data.name,
                    text: `${data.address?.street}, ${data.address?.suite}`,
                    footer: data.phone,
                  });
                });
            });
          });
        });
      });
  });
});

sortById.addEventListener("click", function () {
  tbody.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const sortedId = users.sort((x, y) => y.id - x.id);
      sortedId.forEach((user) => {
        tbody.innerHTML += `
                <tr>
                    <th scope="row">${user.id}</th>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address?.city}</td>
                    <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
                    <td>
                    <button type="button" id=${user.id} class="btn btn-outline-success learnMore">Learn More</button>
                    </td>
                  </tr>
              `;

        // learn more
        let infoBtns = document.querySelectorAll(".learnMore");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            console.log(this.id);
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.name,
                  text: `${data.address?.street}, ${data.address?.suite}`,
                  footer: data.phone,
                });
              });
          });
        });
      });
    });
});

clearAll.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tbody.innerHTML = "";
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});
