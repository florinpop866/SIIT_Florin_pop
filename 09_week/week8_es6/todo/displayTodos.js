getTodos().then((todos) => {
  const boxTodosHtml = document.getElementById("todo-box");
  const todoListHtml = document.getElementById("todo-list");

  for (let i = 0; i < todos.length; i++) {
    const itemHtml = createTodoHtml(todos[i].name);

    const deleteBtn = getDeleteButton(todos[i].id);
    const checkBtn = createCheckButton(todos[i]);

    itemHtml.appendChild(deleteBtn);
    itemHtml.appendChild(checkBtn);
    todoListHtml.appendChild(itemHtml);
  }
  boxTodosHtml.appendChild(todoListHtml);
});

const createTodoHtml = (text) => {
  const todoHtml = document.createElement("li");
  todoHtml.innerText = text;
  return todoHtml;
};
