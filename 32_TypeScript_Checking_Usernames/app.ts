//Checking whether the new user enters a unique name or not.
/*Declaring two Arrays called current_users and new_users to check
whether a new_users names exist in a current_users or Not.*/
let currentUsers: string[] = ["Aman", "Azan", "Farman", "Muddasir", "Ali", "asif"];
let newUsers: string[] = ["Ahmed", "Sufiyan", "Nasir", "Ali", "ASIF"];

/*Making a current user name case insensitive by making it to lower case. 
So the lower case form of current users will be checked with new users in
lower case form for equality checking.*/
let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

//Looping a new users list to check whether it has current users name or Not.
for (let newUser of newUsers) {
                    if (currentUsersLower.includes(newUser.toLowerCase())) {
                                        console.log(`Sorry, the username ${newUser} is already taken. please enter a new UserName`)
                    } else {
                                        console.log(`The UserName ${newUser} is available.`)
                    };
};
