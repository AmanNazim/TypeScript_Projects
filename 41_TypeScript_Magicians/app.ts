//making Array of magicians names and passing it through a function called show_magicians.
//Declaring Array for passing a function.
let magicians_names: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller", "Harry Potter"];

//Writing Function.
function show_magicians(magicians_names: string[]): void {
    for (let magician_name of magicians_names) {
        console.log(`\n${magician_name}`)
    };
};

//calling a function to print each magician name.
show_magicians(magicians_names);