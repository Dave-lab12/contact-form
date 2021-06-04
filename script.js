const modal = document.querySelector(".modal");
const btn = document.getElementById("myBtn");
const span = document.querySelector(".close");
const firstNameInput = document.getElementById("fName");
const emailInput = document.getElementById("email");
const phoneNumInput = document.getElementById("phoneNum");
const message = document.querySelector(".warning");
const submit = document.querySelector(".btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

firstNameInput.addEventListener("focusout", () => {
  let reg = /[-!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  if (firstNameInput.value.match(reg)) {
    message.textContent = "name cannot contain symbols";
    message.classList.remove("remove");
    setTimeout(() => {
      message.classList.add("remove");
    }, 3000);
  }
});
emailInput.addEventListener("focusout", () => {
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailInput.value.match(reg)) {
    message.textContent = "Enter a valid email";
    message.classList.remove("remove");
    setTimeout(() => {
      message.classList.add("remove");
    }, 3000);
  }
});
phoneNumInput.addEventListener("focusout", () => {
  var reg = /^\d+$/;
  if (!phoneNumInput.value.match(reg)) {
    message.textContent = "invalid Phone number";
    message.classList.remove("remove");
  } else if (phoneNumInput.textLength < 9) {
    message.textContent = "invalid Phone number minimum length of 9";
    message.classList.remove("remove");
    setTimeout(() => {
      message.classList.add("remove");
    }, 3000);
  } else if (phoneNumInput.textLength > 11 && !phoneNumInput.value.match(reg)) {
    message.textContent = "invalid phone number minimum length of 11";
    message.classList.remove("remove");
    setTimeout(() => {
      message.classList.add("remove");
    }, 3000);
  }
});

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
span.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
