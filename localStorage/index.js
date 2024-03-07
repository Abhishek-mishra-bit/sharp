const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  console.log(username);
  localStorage.setItem("Username", username);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone", number);
});
