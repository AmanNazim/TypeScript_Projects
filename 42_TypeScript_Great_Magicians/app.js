//making Array of magicians names and passing it through a function called show_magicians.
//Declaring Array for passing a function.
let magicians_names = make_great(["Harry Houdini", "David Blaine", "Penn & Teller", "Harry Potter"]);
//Writing a function.
function show_magicians(magicians_names) {
    for (let magician_name of magicians_names) {
        console.log(`\n${magician_name}`);
    }
    ;
}
;
/*writing a function called make_great that modifies the array of magician
by adding the phrase the great magician to each magician. */
function make_great(magicians_names = []) {
    let great_magicians = [];
    for (let magician_name of magicians_names) {
        great_magicians.push(`The Great ${magician_name}`);
    }
    ;
    return great_magicians;
}
;
/*Using an Array of magician names to call show_magicians function on each Array name
which has already a function of make_great.*/
show_magicians(magicians_names);
export {};
