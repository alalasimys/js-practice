const poke = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((pokemon) => console.log(pokemon));
// console.log(poke);
