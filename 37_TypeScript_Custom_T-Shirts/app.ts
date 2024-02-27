//Writing a function that has a default size and has default message should be printed on the shirt.
function make_shirt(size: string = "Large", message: string = "I love Typescript") {
                    console.log(`\nThe size of the shirt is: ${size}, \nThe message printed on it is: ${message}`)
};

/*Calling a function in three different ways to make large and medium shirts with default message
and a shirt of small size with a message Hello, World!.*/
make_shirt();//calling default function.
make_shirt("Medium");//calling a function by updating its size.
make_shirt("Small", "Hello, World!");//calling a function after updating its size and message.
