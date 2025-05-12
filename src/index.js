function generatePoem(event) {
  alert("hello");
}

let peomFormElement = document.querySelector("#poem-generator-form");
peomFormElement.addEventListener("submit", generatePoem);
