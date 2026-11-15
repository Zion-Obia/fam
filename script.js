const button = document.getElementById("wishBtn");
const message = document.getElementById("wishMessage");

button.addEventListener("click", function () {
  message.textContent = "From your mouth to God's ears!🥳🎉";
  message.classList.toggle("hidden");
});