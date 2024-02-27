//Writing a function called city and country that takes in the name of a city and its country.
function city_country(city: string, country: string): string {
                  return `"${city}", "${country}"` ;
};

//calling a function with three pairs of city and country and printing it.
console.log(city_country("Karachi", "Pakistan"));//"Karachi", "Pakistan".
console.log(city_country("Paris", "France"));//"Paris", "France".
console.log(city_country("New York", "USA"));//"New York", "USA".


