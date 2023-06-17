const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingEl = document.querySelector("#ingredients");

// // 1 li

// const liEl1 = document.createElement("li");

// liEl1.textContent = "Potatoes";

// liEl1.classList.add("item");

// // ingEl.append(liEl);

// console.log(liEl1);

// // 2 li

// const liEl2 = document.createElement("li");

// liEl2.textContent = "Mushrooms";

// liEl2.classList.add("item");

// console.log(liEl2);

// ingEl.append(liEl1, liEl2);

// console.log(ingEl);

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add = "item";

  console.log(liEl);

  ingEl.append(liEl);
});

console.log(ingEl);
