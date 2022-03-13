const express = require('express');
const { ethers } = require("ethers");
const artifacts = require('./artifacts/contracts/Egg.sol/Egg.json');
const fs = require('fs');
// const ganache = require("ganache");

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs'); // set view engine
app.set('views', 'views'); // set view directory

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  var parsed = JSON.parse(fs.readFileSync("./artifacts/contracts/Egg.sol/Egg.json"));
  console.log(parsed);
  res.render('index', {
    title: 'Test',
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    contractJson: JSON.stringify(parsed)
  });
});

app.use((req, res) => {
  res.status(404).render('error');
})