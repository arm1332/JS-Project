//create variable pokemonReository
let pokemonRepository =(function() {
//making an array of objects
  let pokemonList = [
  {name:'Bulbasaur', height:'0.7', type:['grass','poison'] },
  {name:'Charmander', height:'0.6', type:'fire'},
  {name:'Pikachu', height:'0.4', type:'electric'}
]

   function getAll() {
     return pokemonList;
   }
    function add(pokemon) {
      if (typeof pokemon === 'object' && 'name' in pokemon) {pokemonList.push(pokemon);
                                                            }
    }

    return {
      add: add,
      getAll: getAll
    }

})()

pokemonRepository.add({name:'Cubone', height:'0.4', type:'ground'});


pokemonRepository.getAll().forEach(function(pokemon){


  if (pokemon.height >= 0.7) { //if item is great or equal to height
    document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s big!' + '<br>');

  }

  else if (pokemon.height >= 0.5 && pokemon.height <= 0.7){
     document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s medium!' + '<br>');
  }

  else {
  document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s small!' + '<br>');

  }
})
