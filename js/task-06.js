const input = document.querySelector("#validation-input");
const inputLength = parseInt(input.getAttribute("data-length"));
// console.log(typeof inputLength);

input.addEventListener("blur", onBlur);

function onBlur() {
  const inputTextLength = this.value.length;

  if (inputTextLength === inputLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}
