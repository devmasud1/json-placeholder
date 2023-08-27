function findPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadPost(data));
}
findPosts();

function loadPost(userPost) {
  const postContainer = document.getElementById("posts-container");

  for (const post of userPost) {
    const { userId, title, body } = post;

    const div = document.createElement("div");
    div.classList.add("post-box");
    div.innerHTML = `
    <h4> ID: ${userId} </h4>
    <strong> ${title} </strong>
    <p> ${body} </p>
    `;
    postContainer.appendChild(div);
  }
}
