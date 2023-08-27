function findUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadData(data));
}

findUsers();

function loadData(users) {
  const usersContainer = document.getElementById("user-container");

  for (const user of users) {
    const { name, email, phone, address } = user;

    const div = document.createElement("div");
    div.classList.add("users-box");
    div.innerHTML = `
    <h4>Name: ${name}</h4>
    <p>Email: ${email} </p>
    <p>Phone: ${phone} </p>
    <p>City: ${address.city} </p>
    `;
    usersContainer.appendChild(div);
  }
}
