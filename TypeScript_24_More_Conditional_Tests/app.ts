//Second Condition.
let language: string = "ENGLISH";
let language2: string = "Urdu";
let myId: string = "amannazim";
let myId2: string = "AMANNAZIM";
let myIdNumber: number = 77;
let myIdNumber2: number = 78;
let a = 3 + 6;
let b = 5 + 4;
let colors: string[] = ["Red", "Blue", "Yellow", "Green"];

//Testing variables using different Condition statements.

//testing equality and inequality of strings.
console.log(`\nIs language is equal to "English"?. I predict true. \n${language === "ENGLISH"}`);
//True statement.
console.log(`\nIs language is equal to "english"?. I predict false. \n${language === "english"}`);
//False statement.
console.log(`\nIs ENGLISH is equal to Urdu ? I predict False \n${language === language2}`);
//False statement.
console.log(`\nIs ENGLISH is not equal to Urdu ? I predict True. \n${language !== language2}`);
//True statement.
console.log(`\nIs "amannazim" is equal to "AMANNAZIM" ? I predict False. \n${myId === myId2}`);
//False statement.
console.log(`\nIs "amannazim" is not equal to "AMANNAZIM"  ? I predict True. \n${myId !== myId2}`);
//True statement

//Testing variables using lower case and upper case function.

console.log(`\nIs "amannazim" is equal to "AMANNAZIM" ? I predict false. \n${myId == myId2}`);
//False statement.
console.log(`\nIs "amannazim" is equal to "AMANNAZIM" in lowerCase? I predict True. \n${myId == myId2.toLowerCase()}`);
//True statement.
console.log(`\nIs "amannazim" in upper case is not equal to "AMANNAZIM"? I predict False. \n${myId.toUpperCase() != myId2}`);
//False statement.
console.log(`\nIs "amannazim" in upperCase is equal to "AMANNAZIM"? I predict True. \n${myId.toUpperCase() == myId2}`);
//True statement.
console.log(`\nIs "amannazim" in upperCase is equal to "AMANNAZIM" in lowerCase? I predict False. \n${myId.toUpperCase() == myId2.toLowerCase()}`);
//False statement.

//Testing number using different statements.
console.log(`\nIs 77 is equal to 78 ? I predict False. \n${myIdNumber == myIdNumber2}`);
//False statement.

console.log(`\nIs 77 is not equal to 78 ? I predict True. \n${myIdNumber != myIdNumber2}`);
//True statement.

console.log(`\nIs 77 is greater than 78 ? I predict False. \n${myIdNumber > myIdNumber2}`);
//False statement.

console.log(`\nIs 77 is less than 78 ? I predict True. \n${myIdNumber < myIdNumber2}`);
//True statement.

console.log(`\nIs 78 is less than equal to 77 ? I predict False. \n${myIdNumber2 <= myIdNumber}`);
//False statement.

console.log(`\nIs 78 is greater than equal to 77 ? I predict True. \n${myIdNumber2 >= myIdNumber}`);
//True statement.

//Testing using && and || opertators.

//Using && operator.
console.log(`\nAre in 77 = 77 and 78 = 78 both True or not ? I predict True. \n${myIdNumber == 77 && myIdNumber2 == 78}`);
//True.
console.log(`\nAre in 77 = 77 and 78 = 77 both True or not ? I predict False. \n${myIdNumber == 77 && myIdNumber2 == 77}`);
//False.
console.log(`\nAre in 77 = 78 and 78 = 78 both True or not ? I predict False. \n${myIdNumber == 78 && myIdNumber2 == 78}`);
//False.
console.log(`\nAre in 77 = 76 and 78 = 76 both True or not ? I predict False. \n${myIdNumber == 76 && myIdNumber2 == 76}`);
//False.

//Using || operator.
console.log(`\nAre in 77 = 77 OR 78 = 78 one is True or not ? I predict True. \n${myIdNumber == 77 || myIdNumber2 == 78}`);
//True.
console.log(`\nAre in 77 = 77 OR 78 = 77 one is True or not ? I predict True. \n${myIdNumber == 77 || myIdNumber2 == 77}`);
//True.
console.log(`\nAre in 77 = 78 OR 78 = 78 one is True or not ? I predict True. \n${myIdNumber == 78 || myIdNumber2 == 78}`);
//True.
console.log(`\nAre in 77 = 76 OR 78 = 76 one is True or not ? I predict False. \n${myIdNumber == 76 || myIdNumber2 == 76}`);
//False.

//Testing Operations.
console.log(`\nIs '3 + 6' is equal to '5 + 4'?. I predict True. \n${a == b}`);
//True.
console.log(`\nIs '3 + 6' is not equal to '5 + 4'?. I predict False. \n${a != b}`);
//False.
console.log(`\nIs '3 + 6 + 3' is greater than '5 + 4'?. I predict True. \n${(a + 3) > b}`);
//True.
console.log(`\nIs '3 + 6' is less than '5 + 4 + 3'?. I predict True. \n${a < (b + 3)}`);
//True.

//Testing wether an item includes in Array or Not.
console.log(`\nIs Color includes Red ? I predict True. \n${colors.includes("Red")}`);
//True.
console.log(`\nIs Color includes Blue ? I predict True. \n${colors.includes("Blue")}`);
//True.
console.log(`\nIs Color includes Yellow ? I predict True. \n${colors.includes("Yellow")}`);
//True.
console.log(`\nIs Color includes Green ? I predict True. \n${colors.includes("Green")}`);
//True.
console.log(`\nIs Color includes Purple ? I predict False. \n${colors.includes("Purple")}`);
//False.
console.log(`\nIs Color includes Pink ? I predict False. \n${colors.includes("Pink")}`);
//False.
console.log(`\nIs Color includes Black ? I predict False. \n${colors.includes("Black")}`);
//False