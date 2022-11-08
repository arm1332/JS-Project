let pokemonRepository = (function () {
        let pokemonList = [];
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        function add(pokemon) {
          if (
            typeof pokemon === "object" &&
            "name" in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log("pokemon is not correct");
          }
        }
        function getAll() {
          return pokemonList;
        }
        function addListItem(pokemon) {
          let pokemonList = document.querySelector(".pokemon-list");
          let listpokemon = document.createElement("li");
          let button = document.createElement("button");
          button.innerText = pokemon.name;
          button.classList.add("button-class");
          listpokemon.appendChild(button);
          pokemonList.appendChild(listpokemon);
          button.addEventListener("click", function(event) {
            showDetails(pokemon);
          });
        }

        function loadList() {
          return fetch(apiUrl).then(function (response) {
            return response.json();
          }).then(function (json) {
            json.results.forEach(function (item) {
              let pokemon = {
                name: item.name,
                detailsUrl: item.url
              };
              add(pokemon);
              console.log(pokemon);
            });
          }).catch(function (e) {
            console.error(e);
          })
        }

        function loadDetails(item) {
          let url = item.detailsUrl;
          return fetch(url).then(function (response) {
            return response.json();
          }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
          }).catch(function (e) {
            console.error(e);
          });
        }

        function showDetails(item) {
          pokemonRepository.loadDetails(item).then(function () {

   //console.log(pokemon);
    showModal(pokemon)
          });
        }
//modal
function showModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container');

  modalContainer.innerHTML = '';

  //creating elements in DOM
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.classList.add('modal-close');
  // enables the close button hide the modal
  closeButtonElement.addEventListener('click', hideModal)

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement('p');
  contentElement.innerText = 'Height: ' + pokemon.height + 'm';

  let imageElement = document.createElement('img');
  imageElement.src = pokemon.imageUrl;
  //imageElement.style.width = '300px';

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);

  //adding a new class to the modalContainer
  modalContainer.classList.add('is-visible')

  //hides the modal when clicking on any random place outside the modal or on the modal Container
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal()
    }
  })
}

function hideModal() {
  let modalContainer = document.querySelector('#modal-container')
  modalContainer.classList.remove('is-visible');
}

// hides the modal by pressing the Esc key
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
})
        return {
          add: add,
          getAll: getAll,
          addListItem: addListItem,
          loadList: loadList,
          loadDetails: loadDetails,
          showDetails: showDetails
        };
      })();


      pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
          pokemonRepository.addListItem(pokemon);
        });
      });
