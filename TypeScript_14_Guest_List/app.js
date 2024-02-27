"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declaring guest list uisng Array.
let guestList = [
    "Farman", //0
    "Aesha", //1
    "Ali", //2
    "Dua", //3
    "Muddasir", //4
];
//using Array list to send messages to guest.
for (let guest of guestList) {
    console.log(`${guest} : You are invited for dinner, Your will definitely make a memorable day for all of us.`);
}
;
