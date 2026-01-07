const delayedMessage = (time, message) =>
  new Promise((resolve) => setTimeout(() => resolve(message), time));

delayedMessage(2000, "You are late").then((ressult) => console.log(ressult));
