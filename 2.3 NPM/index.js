// var generateName=require("sillyname"); 
//Instead of line 1 we can use line 4 after introducing type:module in package.json file

// import generateName from "sillyname";

// var sillyName=generateName();

// console.log(`My name is ${sillyName}`);

// import superheroes from "superheroes";
// const name=superheroes.random();
// console.log(`I am ${name}`);

// import superheroes from "superheroes";

// const name = superheroes.random();
// console.log(`I am ${name}!`);


import {randomSuperhero} from "superheroes";
 
var mySuperHeroName = randomSuperhero();
 
console.log("I am " + mySuperHeroName);
console.log("hi");