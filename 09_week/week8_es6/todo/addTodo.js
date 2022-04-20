const toDoButton = document.getElementById("todo-button");
const toDoInput = document.getElementById("input-text");

toDoButton.onclick = () => {
  const newTodo = {
    name: toDoInput.value,
    completed: false,
  };

  createTodo(newTodo).then(() => {
    location.reload();
  });
};
