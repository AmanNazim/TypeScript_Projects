"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Declaring different lists.
let countries = ["Saudia Arabia", "Pakistan", "Iran", "Afghanistan", "China", "India"];
let citiesPakistan = ["Karachi", "Islamabad", "Lahore", "Quetta", "Sukkur", "Peshawar", "Multan"];
let languages = ["Arabic", "Urdu", "English", "Spanish", "Turkish", "Chinese"];
let transports = ["Bike", "Car", "Truck", "Train", "Bus", "Aeroplane"];
let mountains = ["K2", "Himaliyan"];
//Printing all lists seperately.
console.log(countries);
console.log(citiesPakistan);
console.log(languages);
console.log(transports);
console.log(mountains);
//Printing all lists items together using concat method.
console.log(countries.concat(citiesPakistan, languages, transports, mountains));
