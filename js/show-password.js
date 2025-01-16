let visible_password = document.getElementsByClassName("visible");
let invisible_password = document.getElementsByClassName("invisible");
let password = document.getElementsByClassName("password");

visible_password.addEventListener("click", () => {
  if (
    visible_password.style.display == "inline" &&
    invisible_password.style.display == "none"
  ) {
    visible_password.style.display = "none";
    invisible_password.style.display = "inline";
    password.type = "text";
  } else {
    visible_password.style.display = "inline";
    invisible_password.style.display = "none";
    password.type = "password";
  }
});

invisible_password.addEventListener("click", () => {
  if (
    visible_password.style.display == "none" &&
    invisible_password.style.display == "inline"
  ) {
    visible_password.style.display = "inline";
    invisible_password.style.display = "none";
    password.type = "password";
  }
});

visible_password.addEventListener("keypress", (key) => {
  if (key.key === "Enter") {
    key.target.click();
    invisible_password.focus();
  }
});

invisible_password.addEventListener("keypress", (key) => {
  if (key.key === "Enter") {
    key.target.click();
    visible_password.focus();
  }
});
