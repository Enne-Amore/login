// variables
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const email_message = document.getElementsByClassName("message")[0];
const password_message = document.getElementsByClassName("message")[1];
const success_modal = document.querySelector("#success-modal");

// click the button
const submit = document.querySelector("#submit");
submit.addEventListener("click", (page) => {
  page.preventDefault();

  // error checking
  if (password.value.length < 6) {
    password_message.textContent = "Preencha no mínimo 6 caracteres*";
    password.focus();

  } else {
    password_message.textContent = "";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email_message.textContent = "Preencha um email válido*";
    email.focus();

  } else {
    email_message.textContent = "";
  }

  // success
  if (email_message.textContent == "" && password_message.textContent == "") {
    success_modal.showModal()
    
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }
});
