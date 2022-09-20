let pokemonList=[ //making an array of objects
  {name:"bulbasaur",type:["grass","poison"],height:"0.7"},
  {name:"charmander", type:"fire",height:"0.6"},
  {name:"pikachu",type:"electric",height:"0.4"}
]
// for loop to go through each item
for(let i =0; i < pokemonList.length; i++ ) {
  if (pokemonList[i].height >= 0.7) { //if item is great or equal to height
    document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height +'-Wow, that\'s big!' + '<br>');
  } else {
    document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + '<br>');

  }
}
