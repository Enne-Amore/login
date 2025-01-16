const email = window.document.getElementById("email");
const password = window.document.getElementById("password");
const email_message = window.document.getElementsByClassName("message")[0];
const password_message = window.document.getElementsByClassName("message")[1];

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  const ok = confirm(
    "Tem certeza que deseja enviar todos os dados já informados?"
  );
  
  if (ok) {
    if (senha.value == "") {
      e.preventDefault();
      password_message.textContent = "Preencha a senha*";
      senha.focus();

    } else {
      password_message.textContent = "";
    }

    if (email.value == "") {
      e.preventDefault();
      email_message.textContent = "Preencha o email*";
      email.focus();

    } else {
      email_message.textContent = "";
    }

    if (nome.value == "" || email.value == "" || senha.value == "") {
      e.preventDefault();
      window.alert("Faltam dados! Preencha o que estiver faltando.");

    } else {
      alert("Formulário preenchido com suceso!");
      email.value = "";
      email.textContent = "";
      senha.value = "";
      senha.textContent = "";
    }
  }
});
