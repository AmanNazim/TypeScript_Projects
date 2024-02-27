//Declaring object containing different items using Array.
let differentLists: any = {
    countries: ["Saudia Arabia", "Pakistan", "Iran", "Afghanistan", "China", "India"],
    citiesPakistan: ["Karachi", "Islamabad", "Lahore", "Multan", "Quetta", "Peshawar"],
    languages: ["Arabic", "Urdu", "English", "Spanish", "French", "Turkish", "Chinese"],
    transport: ["Bike", "Car", "Bus", "Truck", "Train", "Aeroplane"],
    mountain: ["K2", "Himaliyan"]        
};

//declaring Objects in different way.
let items: any = {
                    Country: "Saudia Arabia",
                    city: "Makkah",
                    language: "Arabic",
                    transport: "Car",
}
let items1: any = {
                    Country: "Pakistan",
                    city: "Karachi",
                    language: "Urdu",
                    transport: "Bike",
}

//Printing Objects keys and values.
for(let i in differentLists) {
                    console.log(i, differentLists[i]);
};
for(let i in items) {
                    console.log(`keys = ${i} values = ${items[i]}`);
};
for(let i in items1) {
                    console.log(`keys = ${i} values = ${items1[i]}`);
};

//Printing Objects.
console.log(differentLists);
console.log(items);
console.log(items1);