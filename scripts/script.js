/* Author: Jordan Duffield
 * Description: this script aims to retreive information from the PokeAPI and display the number, name and image
 * on a html webpage. Async functions aid in the fetching of information from the API.
 * TO DO: Write css
 * DONE: retrieve pokemon id number and name from the API, loop for first 151 pokemon, retrieve image content
 */

// maxNum refers to the number of original pokemon, including Mew
const maxNum = 151;
const poke = document.getElementById("pokemon");

// async to await getPokemon function until original group of pokemon have been fetched
// only the first 151 pokemon will be accessed.
const fetchPokemon = async () => 
{
    for (let i=1; i<=maxNum; i++)
    {
        await getPokemon(i);
    }
};

// async to get the pokemon from the url based on the id, used in fetchPokemon to iterate through multiple pokemon
const getPokemon = async num => 
{
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    displayPokemonData(pokemon);
};


// function to display new pokemon data by adding to existing html
// will display name, number and the front-facing sprite of the pokemon
function displayPokemonData(pokemon)
{
    const pokemonInfo = document.createElement('div');
    pokemonInfo.classList.add('pokemon');

    var name = pokemon.name;
    var idNumber = pokemon.id;

    //var to get image data from the API. Currently does not provide the actual image
    var pokeImg = document.createElement("img");
    pokeImg.src = pokemon.sprites.front_default;
    
    //data of the current pokemon is stored in pokeData and added to the new div pokemonInfo
    const pokeData = `
        ${idNumber}
        ${name}
    `;

    pokemonInfo.innerHTML = pokeData;

    //appends the new div of pokemonInfo into the static html div poke
    poke.appendChild(pokemonInfo);

    //appends the image itself to the poke div
    poke.appendChild(pokeImg);
}

// call fetchPokemon()
fetchPokemon();

