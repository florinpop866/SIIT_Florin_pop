const baseURL = "http://localhost:3000";
function getTodos() {
  return fetch(`${baseURL}/todos`).then(function (response) {
    return response.json();
  });
}

function createTodo(newTodo) {
  return fetch(`${baseURL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
}

function updateTodo(todo, check) {
  const updateTodoId = todo.id;
  const newObjectTodo = todo;
  newObjectTodo.completed = !check;

  fetch(`${baseURL}/todos/${updateTodoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObjectTodo),
  });
}
