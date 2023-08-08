const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/mypokemon', async (req, res) => {
  const getPokemon = async (name) => { 
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const myPokemon = await result.json()
    return myPokemon; 
}
async function printPokemon(name) {
    const myPokemon = await getPokemon(name);
    console.log(myPokemon);
}
const myPokemon = await getPokemon('pikachu')
  console.log(myPokemon)
  let newObject = {}
  newObject.abilities = myPokemon.abilities.filter((el, idx) => idx < 2);
  newObject.moves = myPokemon.moves.filter((el, idx) => idx < 4);
  newObject.id = myPokemon.id;
  newObject.name = myPokemon.name;
  newObject.height = myPokemon.height;
  newObject.weight = myPokemon.weight;
  newObject.stats = myPokemon.stats;
  res.send(newObject)
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});