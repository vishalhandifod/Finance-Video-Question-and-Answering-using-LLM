const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Check if the elements exist before adding event listeners
if (registerBtn && container) {
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });
}

if (loginBtn && container) {
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
}

// Optional: Handle back-to-sign-in functionality
const backToSignInLink = document.getElementById("back-to-sign-in-link");
const forgotPasswordSection = document.getElementById("forgot-password-section");
const signInForm = document.querySelector(".form-container.sign-in");
const toggleContainer = document.getElementById("toggle-container");


  backToSignInLink.addEventListener("click", (e) => {
    e.preventDefault();
    signInForm.style.display = "block";
    forgotPasswordSection.style.display = "none";
    toggleContainer.style.display = "block";
  });

