const form = document.querySelector(".login-form");
const email = document.querySelector('[type = "email"]');
const password = document.querySelector('[type = "password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕННІ !!!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    form.reset();
  }
});
