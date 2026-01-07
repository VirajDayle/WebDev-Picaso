function timer(seconds, callBack) {
  let x = 0;
  let id = setInterval(() => {
    x++;
    console.log(x);
    if (x == seconds) {
      clearInterval(id);
      callBack();
    }
  }, 1000);
}

timer(5, () => {
  timer(3, () => {
    console.log("All Done");
  });
});

