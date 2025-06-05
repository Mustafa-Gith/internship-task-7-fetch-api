const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayUsers(data);
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

function displayUsers(users) {
  userContainer.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <strong>${user.name}</strong><br>
      📧 ${user.email}<br>
      🏠 ${user.address.street}, ${user.address.city}
    `;
    userContainer.appendChild(div);
  });
}

reloadBtn.addEventListener("click", fetchUsers);

// Fetch on page load
fetchUsers();
