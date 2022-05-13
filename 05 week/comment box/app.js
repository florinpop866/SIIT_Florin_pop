const createNewCommentDiv = (userMail, commentText) => {
  var newCommentDiv = document.createElement("div");
  newCommentDiv.classList.add("new-comment-div");

  let newUserMail = document.createElement("h3");
  newUserMail.classList.add("new-user-mail");
  newUserMail.innerText = userMail;

  let newCommentText = document.createElement("p");
  newCommentText.classList.add("new-comment-text");
  newCommentText.innerText = commentText;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";

  newCommentDiv.appendChild(newUserMail);
  newCommentDiv.appendChild(newCommentText);
  newCommentDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    deleteButton.parentElement.remove();
  });
  return newCommentDiv;
};

let newCommentList = [];

for (let i = 0; i < newCommentList.length; i++) {
  let newComment = newCommentList[i];
  let newCommentListContainer = document.querySelector(".comment-list");
  let newCommentDiv1 = createNewCommentDiv(
    newComment.userMail,
    newComment.commentText
  );
}

let btn = document.getElementById("add");
let inputUserMail = document.getElementById("user-mail");
let inputCommentText = document.getElementById("comment-text");

btn.addEventListener("click", (event) => {
  let newCommentListContainer = document.querySelector(".comment-list");
  let newCommentDiv1 = createNewCommentDiv(
    inputUserMail.value,
    inputCommentText.value
  );
  newCommentListContainer.appendChild(newCommentDiv1);
});
