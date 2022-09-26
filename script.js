const todoInput = document.querySelector(".todo-input");
const todoAddButton = document.querySelector(".todo-add");
const todoContainer = document.querySelector(".todo-container");

const listArr = ["Clean Room", "Do Stuff"];

todoAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTodos(todoInput.value);
  listArr.push(todoInput.value);
  todoInput.value = "";
});

function init() {
  listArr.forEach((element) => {
    addTodos(element);
  });
}

function addTodos(text) {
  const html = `<div class="todo-card">
  <input
    type="image"
    src="./icons/square.png"
    class="todo-checkbox icon"
  />
  <h4 class="todo-text">${text}</h4>
  <input type="image" src="./icons/edit.png" class="todo-edit icon" />
  <input type="image" src="./icons/delete.png" class="todo-delete icon" />
</div>`;

  const div = document.createElement("div");
  div.innerHTML = html;
  todoContainer.appendChild(div);

  //adding checkbox event listener
  div
    .querySelector(".todo-card")
    .querySelector(".todo-checkbox")
    .addEventListener("click", () => {
      if (
        !div
          .querySelector(".todo-card")
          .querySelector(".todo-checkbox")
          .classList.contains("checked")
      ) {
        div.querySelector(".todo-card").querySelector(".todo-checkbox").src =
          "./icons/checkbox.png";

        div
          .querySelector(".todo-card")
          .querySelector(".todo-checkbox")
          .classList.add("checked");
      } else {
        div.querySelector(".todo-card").querySelector(".todo-checkbox").src =
          "./icons/square.png";

        div
          .querySelector(".todo-card")
          .querySelector(".todo-checkbox")
          .classList.remove("checked");
      }
    });

  //adding edit event listener
  div
    .querySelector(".todo-card")
    .querySelector(".todo-edit")
    .addEventListener("click", () => {
      div.querySelector(".todo-card").querySelector(".todo-text").textContent =
        prompt();
    });

  //adding delete event listener
  div
    .querySelector(".todo-card")
    .querySelector(".todo-delete")
    .addEventListener("click", () => {
      div.remove();
    });
}

init();
