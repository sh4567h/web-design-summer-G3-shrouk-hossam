let userNumber = prompt("Enter number of users");

let users = [];

function addUser(user) {
    users.push(user);
    console.log("User added successfully.");
}

for (let i = 0; i < userNumber; i++) {

    let userId = prompt("Enter user id");
    let userName = prompt("Enter user name");
    let userBalance = Number(prompt("Enter user balance"));

    let isExist = users.find(user => user.id == userId);

    if (isExist) {
        console.log("ID already exists.");
        i--; 
    } else {

        let newUser = {
            id: userId,
            name: userName,
            balance: userBalance
        };

        addUser(newUser);
    }
}

console.log(users);

function editUserBalance() {

    let id = prompt("Enter user id to change balance");
    let newBalance = Number(prompt("Enter new balance"));

    let user = users.find(user => user.id == id);

    if (user) {
        user.balance = newBalance;
        console.log("Balance updated.");
    } else {
        console.log("User not found.");
    }

    console.log(users);
}

function transferBalance() {

    let fromId = prompt("Enter sender id");
    let toId = prompt("Enter receiver id");
    let balance = Number(prompt("Enter amount"));

    let sender = users.find(user => user.id == fromId);
    let receiver = users.find(user => user.id == toId);

    if (sender && receiver) {

        if (sender.balance >= balance) {

            sender.balance -= balance;
            receiver.balance += balance;

            console.log("Transfer completed.");

        } else {
            console.log("Insufficient balance.");
        }

    } else {
        console.log("User not found.");
    }

    console.log(users);
}

function deleteUser() {

    let id = prompt("Enter user id");

    let index = users.findIndex(user => user.id == id);

    if (index != -1) {
        users.splice(index, 1);
        console.log("User deleted.");
    } else {
        console.log("User not found.");
    }

    console.log(users);
}

editUserBalance();

transferBalance();

deleteUser();