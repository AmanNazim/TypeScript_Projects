//Making Ordinal numbers through Array number list.
//Declaring Array for number list.
let ordinalNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Looping Array for printing Ordinal numbers by using if-else chain.
for (let number of ordinalNumber) {
                    if (number === 1) {
                                        console.log("1st")
                    } else if (number === 2) {
                                        console.log("\n2nd")
                    } else if (number === 3) {
                                        console.log("\n3rd")
                    } else {
                                        console.log(`\n${number}th`)
                    };
};