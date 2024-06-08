// Utility function to validate email format
const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email).toLowerCase());

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.querySelector(".error-msg");
  const email = emailInput.value.trim();
  
// Show error message
const showErrorMsg = (element, message) => {
    element.textContent = message;
    element.classList.remove("hidden");
  };
  
// Hide error message
const hideErrorMsg = (element) => {
    element.textContent = "";
    element.classList.add("hidden");
  };

  if (!email) {
    showErrorMsg(errorMsg, "Whoops! It looks like you forgot to add your email");
  } else if (!validateEmail(email)) {
    showErrorMsg(errorMsg, "Please provide a valid email address");
  } else {
    hideErrorMsg(errorMsg);
    alert("Email is valid");
  }
};

// Add event listener to the form
document.getElementById("form").addEventListener("submit", handleSubmit);