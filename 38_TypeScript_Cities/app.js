//Writing a function that accepts city and has a default country Pakistan.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
;
/*Calling a function for three different cities in which one is not in the default country.*/
describe_city("Karachi"); //Karachi is in Pakistan.
describe_city("Islamabad"); //Islamabad is in Pakistan.
describe_city("Makkah", "Saudia Arabia"); //Makkah is in Saudia Arabia.
export {};
