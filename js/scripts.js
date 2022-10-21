//create variable pokemonReository
let pokemonRepository =(function(){
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

      function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerText = pokemon.name
        button.classList.add('button-class');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function(event) {
			showDetails(pokemon)
		})
	}

	function showDetails(pokemon) {
		console.log(pokemon);
    }

    return {
      add: add,
      getAll: getAll,
     addListItem: addListItem,
     showDetails: showDetails
    }

})()

pokemonRepository.add({name:'Cubone', height:'0.4', type:'ground'});

pokemonRepository.getAll().forEach(function(pokemon){

pokemonRepository.addListItem(pokemon);
})

/*let container = document.querySelector('.container');
container.innerHTML = '<button>Click Me</button>';
console.log(container.innerHTML);*/

 /* if (pokemon.height >= 0.7) { //if item is great or equal to height
    document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s big!' + '<br>');

  }

  else if (pokemon.height >= 0.5 && pokemon.height <= 0.7){
     document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s medium!' + '<br>');
  }

  else {
  document.write(pokemon.name + " height: "  + pokemon.height +'-Wow, that\'s small!' + '<br>');

  }
}) */
