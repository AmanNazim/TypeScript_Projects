//declaring transportation list using Array
let cars: Array<string> = [
                    "Audi : ",//0
                    "Mercedes-Benz : ",//1 
                    "Lamborghini : ", //2
                    "Land Rover : "//3
];

//using Array for statements
let statements: Array<string> =[
                    "I would like to buy Audi, if I have money.",//0
                    "Insha Allah, in future I will buy this car.",//1
                    "This is my favorite car.",//2
                    "Land Rover is a very cool car.",//3
];

//print both lists together using iteration.
console.log(`${cars[0]} ${statements[0]}`);//Audi : I would like to buy Audi, if I have money.
console.log(`${cars[1]} ${statements[1]}`);//Mercedes-Benz : Insha Allah, in future I will buy this car.
console.log(`${cars[2]} ${statements[2]}`);//Lamborghini : This is my favorite car.
console.log(`${cars[4]} ${statements[4]}`);//This line will produce index error.

//Correcting Error.
console.log(`${cars[3]} ${statements[3]}`);//This is correct index.
//index in Array start from 0 and ends with array lenght - 1.