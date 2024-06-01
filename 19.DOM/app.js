let api = [
  {
    id: 1,
    todo: "lesson",
  },
  {
    id: 2,
    todo: "gym",
  },
];

const addTodo = document.querySelector(".addTodo");
const addTodoInp = document.querySelector(".addTodoInp");
const todoBox = document.querySelector(".todoBox");
const allDelBtn = document.querySelector(".allDelBtn");
const modalText = document.querySelector(".modalText");
const saveEdit = document.querySelector(".saveEdit");

allDelBtn.addEventListener("click", function () {
  api = [];
  createTodo();
});

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(addTodoInp.value);
  //   console.log(api);
  let obj = {
    id: api.length + 1,
    todo: addTodoInp.value,
  };

  api.push(obj);
  createTodo();
  addTodoInp.value = "";
});

saveEdit.addEventListener("click", function () {
  console.log(modalText.value);

  api = api.map((elem) => {
    if (elem.id == modalText.getAttribute("data")) {
      elem.todo = modalText.value;
    }
    return elem;
  });

  createTodo();
});

//   <!-- <div class="todoItem">
{
  /* <p class="todoText">Ders</p>
<button class="deleteBtn">Delete</button>
</div> */
}

function createTodo() {
  todoBox.innerHTML = "";
  //        <div class="todoItem">
  //       <p class="todoText">Ders</p>
  //       <button class="deleteBtn">Delete</button>
  //     </div>`;

  api.forEach((element, index) => {
    const todoItem = document.createElement("div");
    const todoText = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    todoItem.className = "todoItem card";
    todoText.className = "todoText card-body";
    deleteBtn.className = "deleteBtn btn btn-danger";
    editBtn.className = "editBtn btn btn-warning";

    todoText.innerHTML = index + 1 + "-" + element.todo;
    deleteBtn.innerHTML = "DELETE";
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");
    editBtn.setAttribute("data", element.id);
    deleteBtn.setAttribute("id", element.id);

    todoItem.append(todoText, deleteBtn, editBtn);
    todoBox.appendChild(todoItem);

    deleteBtn.addEventListener("click", function (e) {
      // console.log(e.target.getAttribute("id"));

      api = api.filter((elem) => elem.id != e.target.getAttribute("id"));
      createTodo();
    });

    editBtn.addEventListener("click", function (e) {
      console.log(e.target.getAttribute("data"));
      console.log(modalText);

      modalText.value = api.find(
        (elem) => elem.id == e.target.getAttribute("data")
      ).todo;

      modalText.setAttribute("data", e.target.getAttribute("data"));
    });
  });
}
