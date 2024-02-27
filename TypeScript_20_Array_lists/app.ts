//Declaring different lists.
let countries : Array<string> = ["Saudia Arabia", "Pakistan", "Iran", "Afghanistan", "China", "India"];
let citiesPakistan : Array<string> = ["Karachi", "Islamabad", "Lahore", "Quetta", "Sukkur", "Peshawar", "Multan"];
let languages : Array<string> = ["Arabic", "Urdu", "English", "Spanish", "Turkish", "Chinese"];
let transports : Array<string> = ["Bike", "Car", "Truck", "Train", "Bus", "Aeroplane"];
let mountains : Array<string> = ["K2", "Himaliyan"];

//Printing all lists seperately.
console.log(countries);
console.log(citiesPakistan);
console.log(languages);
console.log(transports);
console.log(mountains);

//Printing all lists items together using concat method.
console.log(countries.concat(
                    citiesPakistan, 
                    languages, 
                    transports, 
                    mountains)
);