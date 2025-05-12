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

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = "do8e05a55a39a74t37328f1154eb845f";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a sweet poem generator who produces concise yet romantic poems about farts, please be sure to include a fart joke as part of the poem. Please keep the poem as short as possible. Sign the poem with 'SheCodes AI' inside a <strong> element on it's own line at the bottom";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating Poem...");

  axios.get(apiUrl).then(displayPoem);
}

let peomFormElement = document.querySelector("#poem-generator-form");
peomFormElement.addEventListener("submit", generatePoem);
