//declaring guest list uisng Array.
let guestList: Array<string> = [
                    "Farman",  //0
                    "Aesha",   //1
                    "Ali",     //2
                    "Dua",     //3
                    "Muddasir",//4
];

//using Array list to send messages to guest.
for(let guest of guestList) {
                    console.log(`${guest} : You are invited for dinner, Your will definitely make a memorable day for all of us.`)
};

//guest who can't make it
console.log(guestList[4] + ", will not join us for dinner");

//modifying guest list.
guestList.splice(4, 1, "Azan");

//print new invitations
console.log("updated invitations");

//updated new set of invitation
for(let guest of guestList) {
                    console.log(`${guest} : You are invited for dinner, Your will definitely make a memorable day for all of us.`)
};

//print statement to inform people that I have more space for dinner
console.log("I am excited to inform you all that now I have more space available for dinner");

//new invitations are added to the list
guestList.unshift("Urooj");
guestList.splice(2, 0, "Sufiyan");
guestList.push("Muddasir");

//print to inform all guest that now I added three more guest in the list
console.log("Guys now I have been added three more people to the list");

//new invitation sets for three more people
for(let guest of guestList) {
                    console.log(`${guest} : You are invited for dinner, Your will definitely make a memorable day for all of us.`)
};

//printing number people inviting to dinner.
console.log(`I am inviting ${guestList.length} people for dinner.`)