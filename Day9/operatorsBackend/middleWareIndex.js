const express = require("express");
const app = express();
const port = 3000;

const validateNumber = (req, res, next) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("a and b must be numbers");
  }

  req.a = a;
  req.b = b;
  next();
};

app.get("/sum", validateNumber,(req, res) => {
  res.status(200).send((req.a + req.b).toString());
});

app.get("/multiply", validateNumber,(req, res) => {
  res.status(200).send((req.a * req.b).toString());
});

app.get("/divide", validateNumber,(req, res) => {

  if (req.b === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  res.status(200).send((req.a / req.b).toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
