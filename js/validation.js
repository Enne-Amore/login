const email = document.querySelector("#email");
const password = document.querySelector("#password");
const email_message = document.getElementsByClassName("message")[0];
const password_message = document.getElementsByClassName("message")[1];

const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  if (password.value.length < 6) {
    e.preventDefault();
    password_message.textContent = "Preencha no mínimo 6 caracteres*";
    password.focus();

  } else {
    password_message.textContent = "";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    e.preventDefault();
    email_message.textContent = "Preencha um email válido*";
    email.focus();

  } else {
    email_message.textContent = "";
  }
});
