function registerUser(callback) {
  setTimeout(() => {
    console.log("User registered");
    callback();
  }, 1000);
}

function sendWelcomeEmail(callback) {
  setTimeout(() => {
    console.log("Welcome email sent");
    callback();
  }, 1000);
}

function logActivity(callback) {
  setTimeout(() => {
    console.log("User activity logged");
    callback();
  }, 1000);
}

function redirectToDashboard() {
  console.log("User redirected to dashboard");
}

// CALLBACK HELL 👇
registerUser(() => {
  sendWelcomeEmail(() => {
    logActivity(() => {
      redirectToDashboard();
    });
  });
});
