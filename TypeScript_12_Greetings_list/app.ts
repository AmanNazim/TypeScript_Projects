//declaring Array
let names: Array<string> = ["Farman", "Aman", "Muddasir", "Sufiyan" ];

//declaring message
let message: string = ": Would you like to learn coding";/*: Would you like to
learn coding*/

//accessing Array with message.
for(let name of names) {
                    console.log(`${name} ${message}`)         
};
/* the output of this iteration is: */
//Farman : Would you like to learn coding.
//Aman : Would you like to learn coding
//Muddasir : Would you like to learn coding
//Sufiyan : Would you like to learn coding