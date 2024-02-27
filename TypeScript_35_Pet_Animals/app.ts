//Storing pet animals names in Array to write statements about each using loop.
let petAnimals: string[] = ["Horse", "Cat", "Rabbit"];

//Looping an Array to write names of pet animals.
for (let petAnimal of petAnimals) {
                    console.log(`${petAnimal}`)
};

//modifying an Array to write a statements about pet animals.
for (let petAnimal of petAnimals) {
                    console.log(`\nA ${petAnimal} would make a great pet.`)
};


//Printing an additional line stating that what common these animals have.
console.log("\nAny of these animals would make a great pet.");