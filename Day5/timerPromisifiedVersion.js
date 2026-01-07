function timer(seconds) {
  return new Promise((resolve) => {
    let x = 0;
    let id = setInterval(() => {
      x++;
      console.log(x);
      if (x == seconds) {
        clearInterval(id);
        resolve();
      }
    }, 1000);
  });
}

timer(3).then(() => timer(4));
