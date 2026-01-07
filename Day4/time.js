function startCount(sec, onTick) {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    onTick(count);
    if (count === sec) {
      clearInterval(intervalId);
      onTick("done");
    }
  }, 1000);
  return intervalId;
}

const timer = (sec) =>
  new Promise((resolve) => {
    console.log("Timer is started");
    startCount(sec, (count) => {
      if (count === "done") resolve();
      else console.log(count);
    });
  });

timer(4).then(() => console.log("Time is done"));

timer(4).then(() => console.log("Time is done"));
