let pokemonList=[
  {name:"bulbasaur",type:["grass","poison"],height:"0.7"},
  {name:"charmander", type:"fire",height:"0.6"},
  {name:"pikachu",type:"electric",height:"0.4"}
]

for(let i =0; i < pokemonList.length; i++ ) {
  if (pokemonList[i].height > 0.7) {
    document.write(pokemonList[i].name + 'height:' + pokemonList[i].height +'-Wow, that/s big!' + '<br>');
  } else {
    document.write(pokemonList[i].name + 'height:' + pokemonList[i].height + '<br>');

  }
}
