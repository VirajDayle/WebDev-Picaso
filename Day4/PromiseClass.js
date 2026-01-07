class Promise1 {
  constructor(fn) {
    this.resolve = null;
    this.isResolve = false;

    const donee = () => {
      this.isResolve = true;
      if (this.resolve) {
        this.resolve();
      }
    };

    fn(donee);
  }

  then(callback) {
    this.resolve = callback;
    if (this.isResolve) {
      this.resolve();
    }
  }
}

function fn(done) {
  console.log("I start");
  setTimeout(done, 3000);
  console.log("complete");
}

const timer = new Promise1(fn);

timer.then(() => console.log("HIII"));
