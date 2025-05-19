document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");

  const li = document.createElement("li");
  li.textContent = commentInput.value;
  commentList.appendChild(li);

  commentInput.value = "";
});
document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  const newPost = document.createElement("article");
  newPost.classList.add("post");
  newPost.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
  document.querySelector(".blog-posts").appendChild(newPost);
  this.reset();
});

