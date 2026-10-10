const USERS = [
  { username: "malak",   password: "123456" },
  { username: "mohamed", password: "password" }
];

document.getElementById("togglePassword").addEventListener("click", function () {
  const input = document.getElementById("password");
  if (input.type === "password") {
    input.type = "text";
    this.textContent = "🙈";
  } else {
    input.type = "password";
    this.textContent = "👁";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message  = document.getElementById("message");

  const found = USERS.find(u => u.username === username && u.password === password);

  message.classList.remove("hidden", "success", "error");

  if (found) {
    message.classList.add("success");
    message.textContent = "✅ Login successful!";
    setTimeout(() => { window.location.href = "gallery.html"; }, 1000);
  } else {
    message.classList.add("error");
    message.textContent = "❌ Invalid username or password";
  }
});
