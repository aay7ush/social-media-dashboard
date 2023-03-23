const button = document.getElementById("theme-switcher")

button.addEventListener("click", () => {
  button.classList.toggle("after:left-1")
  button.classList.toggle("after:left-6")
  button.classList.toggle("bg-gradient-to-r")
  button.classList.toggle("from-dark-toggle-1")
  button.classList.toggle("to-dark-toggle-2")
  button.classList.toggle("bg-light-toggle")
  button.classList.toggle("after:bg-dark-blue-600")
  button.classList.toggle("after:bg-pale-blue")
  window.document.documentElement.classList.toggle("dark")
})
