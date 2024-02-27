"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//using Array to store places.
let favoritePlaces = ["Saudia Arabia", "Africa", "Maldives", "London", "America"];
//Accessing Array in its original order.
console.log(`Original Order`);
console.log(favoritePlaces);
//printing Array in alphabetical order without modifying the actual list.
console.log(`\nAlphabetical Order`);
console.log([...favoritePlaces].sort());
//showing that Array is still in its original order.
console.log(`\nArray is still in its Original Order`);
console.log(favoritePlaces);
//printing Array in reverse alphabetical order without modifying the actual list.
console.log(`\nReverse Alphabetical Order`);
console.log([...favoritePlaces].sort((a, b) => a > b ? -1 : 1));
//showing that Array is still in its original order.
console.log(`\nArray is still in its Original Order`);
console.log(favoritePlaces);
//Reversing the order of actual list and printing it.
favoritePlaces.reverse();
console.log(`\nArray in Reverse Order`);
console.log(favoritePlaces);
//Reversing the order of actual list again and printing its original order.
favoritePlaces.reverse();
console.log(`\nArray in Reverse Order Again to maitain original Array`);
console.log(favoritePlaces);
//sorting and printing the actual list of array alphabetically.
favoritePlaces.sort();
console.log(`\nArray in Alphabetical Order`);
console.log(favoritePlaces);
//sorting and printing the array reverse alphabetically.
favoritePlaces.sort((a, b) => a > b ? -1 : 1);
console.log(`\nArray in Alphabetical Reverse Order`);
console.log(favoritePlaces);
