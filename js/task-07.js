const input = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

// console.log(input);
// console.log(outputText);

input.addEventListener("input", onInput);

function onInput() {
  outputText.style.fontSize = input.value + "px";
}
