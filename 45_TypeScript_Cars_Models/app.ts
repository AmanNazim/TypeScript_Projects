//Writing a function that will stores information about a car in a object.
function car_information(manufacturer_name: string, model_name: string, ...options: string[]): Object {
    let car_information: any = {
        manufacturer_name: manufacturer_name,
        model_name: model_name
    };
    for (let option of options) {
        let [key, value] = option.split(":");
        car_information[key.trim()] = value.trim();
    };
    return car_information
};

//Calling a function for printing Object to check is information stored correctly.
let car: any = car_information("Toyota", "Camry", "Color: red", "Sunroof: Yes", "Year: 2022", "Navigation: Yes");

//Printing a function to check is Object storing information correctly.
console.log(car);