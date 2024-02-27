//Writing a function for Array which can collect multiple items.
function make_sandwich(...items) {
    console.log("\nYou ordered a sandwich with the following items.");
    for (let item of items) {
        console.log(`- ${item}.`);
    }
    ;
}
;
//calling a function three times using using different items.
make_sandwich("Chicken", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Cabbage");
make_sandwich("Beef", "Onions", "Cucumber");
export {};
