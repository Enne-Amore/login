let senha_visivel = document.getElementsByClassName("visivel");
let senha_invisivel = document.getElementsByClassName("invisivel");
let password = document.getElementsByClassName("password");

senha_visivel.addEventListener("click", () => {
  if (
    senha_visivel.style.display == "inline" &&
    senha_invisivel.style.display == "none"
  ) {
    senha_visivel.style.display = "none";
    senha_invisivel.style.display = "inline";
    password.type = "text";
  } else {
    senha_visivel.style.display = "inline";
    senha_invisivel.style.display = "none";
    password.type = "password";
  }
});

senha_invisivel.addEventListener("click", () => {
  if (
    senha_visivel.style.display == "none" &&
    senha_invisivel.style.display == "inline"
  ) {
    senha_visivel.style.display = "inline";
    senha_invisivel.style.display = "none";
    password.type = "password";
  }
});

// Ver senha usando o teclado
senha_visivel.addEventListener("keypress", (tecla) => {
  if (tecla.key === "Enter") {
    tecla.target.click();
    senha_invisivel.focus();
  }
});

senha_invisivel.addEventListener("keypress", (tecla) => {
  if (tecla.key === "Enter") {
    tecla.target.click();
    senha_visivel.focus();
  }
});
