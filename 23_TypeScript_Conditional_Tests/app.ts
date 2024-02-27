//Conditional Tests
//Declaring variable for conditional tests.
let country: string = "Pakistan";

//Testing Condition using different statements.
console.log(`\n Is country is equal to "Pakistan"?. I predict true. \n ${country == "Pakistan"}`);
//True statement.

console.log(`\n Is country is not equal to "Pakistan"?. I predict false. \n ${country != "Pakistan"}`);
//False statement.

console.log(`\n Is country is not equal to "India"?. I predict True. \n ${country != "India"}`);
//True statement.

console.log(`\n Is country is equal to "India"?. I predict false. \n ${country == "India"}`);
//False statement.

console.log(`\n Is country in lower case is equal to "pakistan"?. I predict True. \n ${country.toLowerCase() == "pakistan"}`);
//True statement.

console.log(`\n Is country in Upper case is equal to "Pakistan"?. I predict False. \n ${country.toUpperCase() == "Pakistan"}`);
//False statement.

console.log(`\n Is country in upper case is equal to "PAKISTAN"?. I predict True. \n ${country.toUpperCase() == "PAKISTAN"}`);
//True statement.

console.log(`\n Is country starts with "Ind"?. I predict False. \n ${country.startsWith("Ind")}`);
//false statement.

console.log(`\n Is country starts with "Pak"?. I predict True. \n ${country.startsWith("Pak")}`);
//True statement.

console.log(`\n Is country includes "Pakistani"?. I predict False. \n ${country.includes("Pakistani")}`);
//False statement.

console.log(`\n Is country ends with "istan"?. I predict True. \n ${country.endsWith("istan")}`);
//True statement.