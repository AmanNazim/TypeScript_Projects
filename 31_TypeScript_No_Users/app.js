//This program will check certain fruits in Array.
//Declaring Array which will be use to write greetings to users through looping an Array.
let userNames = [];
/*checking an empty list to print alert message for more users.
and Looping an Array to print  greetings to each user.*/
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    for (let userName of userNames) {
        if (userName === "Admin") {
            console.log("Hello Admin, would you like to see a status report.");
        }
        else {
            console.log(`Hello ${userName}, Thank you for logging in again.`);
        }
        ;
    }
    ;
}
;
export {};
