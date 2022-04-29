const express = require('express');
const { ethers } = require("ethers");
const artifacts = require('./artifacts/contracts/Egg.sol/Egg.json');
const fs = require('fs');
// const ganache = require("ganache");

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs'); // set view engine
app.set('views', 'views'); // set view directory

app.listen(PORT, () => console.log(`Listening on Port ${PORT}. Go to http://localhost:5000`));

app.use('/static', express.static('static'));

const parsed = JSON.parse(fs.readFileSync("./artifacts/contracts/Egg.sol/Egg.json"));
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  // console.log(parsed);
  res.set({ 'content-type': 'text/html; charset=utf-8' });
  res.render('index', {
    title: 'Cryptomons',
    contractAddress: contractAddress,
    contractJson: JSON.stringify(parsed)
  });
});

app.get('/lineage/:egg', (req,res) => {
  const egg = req.params['egg'];
  res.set({ 'content-type': 'text/html; charset=utf-8' });
  res.render('lineage', {
    title: 'Cryptomons',
    contractAddress: contractAddress,
    contractJson: JSON.stringify(parsed),
    eggId: egg
  })
});

app.get('/breed/:egg', (req,res) => {
  const egg = req.params['egg'];
  res.set({ 'content-type': 'text/html; charset=utf-8' });
  res.render('breed', {
    title: 'Cryptomons',
    contractAddress: contractAddress,
    contractJson: JSON.stringify(parsed),
    eggId: egg
  })
});

app.use((req, res) => {
  res.set({ 'content-type': 'text/html; charset=utf-8' });
  res.status(404).render('error');
})