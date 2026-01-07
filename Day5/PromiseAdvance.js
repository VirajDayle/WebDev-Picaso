class PromiseAdvance {
  constructor(fn) {
    this.isResolve = false;
    this.isReject = false;
    this.isPending = true;
    this.resolve = null;
    this.reject = null;

    const success = (value) => {
      this.isResolve = true;
      this.isPending = false;
      if (this.resolve) this.resolve(value);
    };

    const fail = (err) => {
      this.isReject = true;
      this.isPending = false;
      if (this.reject) this.reject(err);
    };

    fn(success, fail);
  }

  then(callback) {
    this.resolve = callback;
    if (this.isResolve) {
      this.resolve();
    }
  }

  catch(callback) {
    this.reject = callback;
    if (this.isReject) {
      this.reject();
    }
  }
}

function fn(succes, fail) {
  let x = false;
  if (x) {
    setTimeout(succes, 2000);
  } else {
    setTimeout(fail, 2000);
  }
}
const success = (value) => {
  this.isResolve = true;
  this.isPending = false;
  if (this.resolve) this.resolve(value);
};

const fail = (err) => {
  this.isReject = true;
  this.isPending = false;
  if (this.reject) this.reject(err);
};

fn(success, fail);

const timer = new PromiseAdvance(fn);
timer.catch(() => console.log("Jai shree ram"));
