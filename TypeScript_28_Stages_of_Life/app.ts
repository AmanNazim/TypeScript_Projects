//Writing an if-else chain program that determines a person's stage of life.
//Declaring an age variable which will use to determine the person's stage of life.
let age: number = 16;

//writing an if-else chain which will determine the person's stage of life.
if (age < 2) {
                    console.log("The person is a baby.")
} else if (age == 2 || age < 4) {
                    console.log("The person is a toddler.")
} else if (age == 4 || age < 13) {
                    console.log("The person is a kid.")
} else if (age == 13 || age < 20) {
                    console.log("The person is a teenager.")
} else if (age == 20 || age < 65) {
                    console.log("The person is an adult.")
} else {
                    console.log("The person is an elder.")
};
//This program will determine the person's stage of life.
