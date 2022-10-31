let todos = [];

function renderTodos(array, node) {
  node.innerHTML = null;
  array.forEach((row) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `
    <div class="d-flex align-items-center justify-content-between border p-2">
    <span class="text-black">${row.id}</span>
    <h4 class="text-black m-0">${row.title}</h4>
    <button  class="btn btn-danger" id="deletBtn" data-btn-id=${row.id}>Dalet</button>
  </div>
    `;

    node.appendChild(newLi);
  });
}

$("form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  inputValue = $("input").value.trim();

  const obj = {
    title: inputValue,
    isCompletet: false,
    id: todos[todos.length-1]?.id+1 || 0,
  };

  todos.push(obj);

  $("input").value = null;
  renderTodos(todos, $(".list"));
});

let deletBtn = document.querySelector("#deletBtn");

$(".list").addEventListener("click", (e) => {
  if (e.target.matches("#deletBtn")) {
    let clickedTotoId = e.target.getAttribute("data-btn-id");

    todos = todos.filter((todo) => todo.id !== Number(clickedTotoId));

    console.log(todos);
    renderTodos(todos, $(".list"));
  } else {
    console.log("o'chirilmadi");
  }
});


