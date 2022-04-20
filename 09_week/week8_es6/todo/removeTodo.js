const getDeleteButton = (todoId) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  deleteButton.onclick = () => {
    fetch(`${baseURL}/todos/${todoId}`, {
      method: "DELETE",
    }).then(() => {
      location.reload();
    });
  };
  return deleteButton;
};
