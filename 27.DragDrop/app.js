let items = document.querySelectorAll(".item");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

for (let item of items) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;
    console.log(selected);

    box2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box2.addEventListener("drop", function (e) {
      e.preventDefault();
      box2.appendChild(selected);
      selected = null;
    });

    box1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box1.addEventListener("drop", function (e) {
      e.preventDefault();
      box1.appendChild(selected);
      selected = null;
    });
  });
}
