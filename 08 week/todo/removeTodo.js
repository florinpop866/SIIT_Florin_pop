function getDeleteButton(todoId) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  deleteButton.onclick = function () {
    fetch(`${baseURL}/todos/${todoId}`, {
      method: "DELETE",
    }).then(function () {
      location.reload();
    });
  };
  return deleteButton;
}
