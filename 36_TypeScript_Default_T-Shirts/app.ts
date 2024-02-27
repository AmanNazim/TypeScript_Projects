//Writing a function that accepts a size and the text of message should be printed on the shirt.
function make_shirt(size: string = "", message: string = "") {
                    console.log(`The size of the shirt is: ${size}. \nThe message printed on it is: ${message}.`)
};

/*Calling a default function which has a empty size and a message values and 
also by giving it's a size and a message should be printed on shirt.*/
make_shirt();//has no output.
make_shirt("Extra Large", "I love Pizza");//calling using size and message function.