// /components/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch(error => console.error("Error cargando navbar:", error));
});
