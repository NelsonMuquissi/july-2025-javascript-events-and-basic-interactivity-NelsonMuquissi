/* =====================
   PART 1: EVENT HANDLING
   ===================== */
const toggleMessageBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleMessageBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
  toggleMessageBtn.textContent = message.classList.contains("hidden")
    ? "Show Message"
    : "Hide Message";
});

/* =====================
   PART 2: INTERACTIVE ELEMENTS
   ===================== */
// Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Section
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

/* =====================
   PART 3: FORM VALIDATION
   ===================== */
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.classList.add("hidden");

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password validation (min 6 chars, at least one number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(passwordInput.value.trim())) {
    passwordError.textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  if (valid) {
    successMessage.classList.remove("hidden");
    signupForm.reset();
  }
});
