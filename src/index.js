function displayPoem(response) {
  console.log("Poem generated!");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "do8e05a55a39a74t37328f1154eb845f";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating Poem...");
  axios.get(apiUrl).then(displayPoem);
}

let peomFormElement = document.querySelector("#poem-generator-form");
peomFormElement.addEventListener("submit", generatePoem);
