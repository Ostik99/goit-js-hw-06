// 1.

const categories = document.querySelectorAll(".item");

const categoriesCount = categories.length;

console.log("Number of categories:", categoriesCount);

// 2.
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
