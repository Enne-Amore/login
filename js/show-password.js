// variables
const visible_password = document.querySelector("#visible");
const invisible_password = document.querySelector("#invisible");

// show password
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

// hide password
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

// accessibility via key
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
