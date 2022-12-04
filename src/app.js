const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:name', (req, res) => {
  const result = sayHello(req.params.name);

  res.status(200).json({ result });
});

app.get('/strings/upper/:string', (req, res) => {
  const result = uppercase(req.params.string);

  res.status(200).json({ result });
});

app.get('/strings/lower/:string', (req, res) => {
  const result = lowercase(req.params.string);

  res.status(200).json({ result });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    const result = firstCharacters(req.params.string, req.query.length);
    res.status(200).json({ result });
  } else {
    const result = firstCharacter(req.params.string);

    res.status(200).json({ result });
  }
});

module.exports = app;
