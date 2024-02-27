//making Array of magicians names and passing it through a function called show_magicians.
//Declaring Array and a copy for passing a function.
let magicians_names: string[] = ["Harry Houdini", "David Blaine", "Penn & Teller", "Harry Potter"];
let new_magicians: string[] = make_great([...magicians_names]);

//Writing a function.
function show_magicians(magicians_names: string[]): void {
    for (let magician_name of magicians_names) {
        console.log(`\n${magician_name}`)
    };
};

/*writing a function called make_great that modifies the array of magician
by adding the phrase the great magician to each magician. */
function make_great(magicians_names: string[] = []): string[] {
    let great_magicians: string[] = [];
    for (let magician_name of magicians_names) {
        great_magicians.push(`The Great ${magician_name}`)
    };
    return great_magicians;
};

//calling a show_magicians function on an original Array to print each magician name.
show_magicians(magicians_names);



//Using an copy Array of magician names to call show_magicians and make_great function on each name.
show_magicians(new_magicians);
