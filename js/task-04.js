const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

const handlePlusClick = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};

const handleMinusClick = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", handleMinusClick);
increment.addEventListener("click", handlePlusClick);
