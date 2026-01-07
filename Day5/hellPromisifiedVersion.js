function registerUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User registered");
      resolve();
    }, 1000);
  });
}

function sendWelcomeEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Welcome email sent");
      resolve();
    }, 1000);
  });
}

function logActivity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User activity logged");
      resolve();
    }, 1000);
  });
}

function redirectToDashboard() {
  console.log("User redirected to dashboard");
}

registerUser()
  .then(() => sendWelcomeEmail())
  .then(() => logActivity())
  .then(() => redirectToDashboard())
  .catch((error) => console.log(error));
