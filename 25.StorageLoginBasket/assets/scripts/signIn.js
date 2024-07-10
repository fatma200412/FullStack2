let signInForm = document.querySelector(".signInform");
let signInpName = document.querySelector(".signInpName");
let signInpPass = document.querySelector(".signInPass");

let base_url = "http://localhost:3000/users";

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    name: signInpName.value,
    password: signInpPass.value,
  };
  console.log(newUser);

  fetch(base_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  document.location.href = "index.html";
});
