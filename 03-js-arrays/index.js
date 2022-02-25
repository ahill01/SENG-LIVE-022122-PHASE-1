/***** WARMUP ******/

//add
const add = (num1,num2) => num1+num2; 
//sub
const sub = (num1,num2) => num1 - num2
//multiply
const multiply = (num1,num2) => num1*num2;

// compute -> callback function14
const compute = cb => cb(6,3);

const compute2 = (cb, num1=6,num2=3) => cb(num1,num2);

//stretch 

const compute3 = ((num1,num2) => num1+num2); 
const compute4 = ((num1,num2) => num1-num2); 
const compute5 = ((num1,num2) => num1*num2);
/**** Lecture *****/


// Understanding arrays

// What are arrays and how do they allow us to structure our data?

// Define a variable 'pokemon' set to an empty array.
//const pokemon = []; 

// Rewrite the 'pokemon' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'

// const pokemon = ["pikachu", "bulbasaur", "jigglypuff"];
// Elements:

// Return 'bulbasour' from the pokemon array
//pokemon[1];
// Modifying elements:

// Add a new element 'mew' to the end of pokemon. There are 2 ways this can be accomplished. Which method is best practice and why?
//pokemon[pokemon.length]="mew";

//pokemon.push("mew");
//const pokemon1 = [...pokemon, "mew"];

// Add a new element 'Gloom' to the beginning of pokemon.
//pokemon.unshift("bloom");

//const pokemon2 = ["bloom", ...pokemon1];

// Remove the first element of 'pokemon'
//44pokemon.shift(); 

// Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'squirtle', 'turtwig'.
//const favorites = [pokemon[0], pokemon[1], "squirtle", "turtwig"];

//const favorites1 = [...pokemon.slice(0,2),'squirtle','turtwig'];

//const favorites2 = [...pokemon.slice(0,2),'squirtle','turtwig'];

// For the following exercises, comment in the following array:
 const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// Iteration

// looping methods:

// for loop
//console.log("For Loop");
//for(let i = 0; i < pokemon.length; i++){console.log(pokemon[i])};
// Define a for loop that will log each pokemon character to the console.

// for..of
//// Rewrite the previous exercise using a for..of loop
//console.log("for/of loop");
//for(p of pokemon){
//    console.log(p); }
//const aString = "A1B2C3D4";// 
/*
for(s of aString){
    console.log(s);
}
*/ 

// .forEach

// Use .forEach() to iteratate through the pokemon array and return each character name in large caps

pokemon.forEach((e) => console.log(e.toUpperCase())); 

// Searching an array: .find() vs .filter()

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// Modifying an elements in an array

// .map()

// Using map, return a new array with all pokemon character names lowercased.
const lowerP = pokemon.map((e)=> e.toLowerCase());
