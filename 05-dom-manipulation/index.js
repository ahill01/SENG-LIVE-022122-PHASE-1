const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];
//constructing cards

//grabbing pokeContainer- where we will dump all the cards
const pokeContainer = document.querySelector('#poke-container')

//replacing header
const header = document.querySelector("#header")
header.innerHTML = `<img id="header-img" src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" />`

// create a card for each pokemon in array

pokemons.forEach(function(character){
  return renderPokemon(character)
});

function renderPokemon(char){
//create divs ("cards")
const pokeCard = document.createElement('div')
pokeCard.id = `poke-${char.id}`
pokeCard.className = 'poke-card'

//add images
const pokeImg = document.createElement('img')
pokeImg.src = char.img
pokeImg.alt = `${char.name} image`

//add names
const pokeName = document.createElement('h3');
  pokeName.textContent = char.name;

  pokeContainer.appendChild(pokeCard)
  pokeCard.append(pokeImg, pokeName)

}

//removing extra bits; 
const lectureDiv = document.querySelector('#lecture-goals');
lectureDiv.remove();