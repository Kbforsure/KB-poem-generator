function generatePoem(event) {
  event.preventDefault();
}

new Typewriter("#poem", {
  strings: "Hello, there!",
  autoStart: true,
  delay: 3,
  cursor: "",
});

let peomFormElement = document.querySelector("#poem-generator-form");
peomFormElement.addEventListener("submit", generatePoem);
