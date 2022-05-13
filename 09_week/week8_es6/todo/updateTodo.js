const createCheckButton = (todo) => {
  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.classList.add("checkboxes");

  if (todo.completed === false) {
    checkButton.checked = false;

    checkButton.onclick = () => {
      updateTodo(todo, false).then();
      checkButton.checked = true;
    };
  }
  if (todo.completed === true) {
    checkButton.checked = true;

    checkButton.onclick = () => {
      updateTodo(todo, true).then();
      checkButton.checked = false;
    };
  }
  return checkButton;
};
