console.log("Hello World");

// let phrase = 'slow';

// function getColor(phrase) {
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
//     let result;
//     if (phrase == 'stop') {
//         result = "red";
//     }
//     else if (phrase == 'slow') {
//         result = "yellow";
//     }
//     else if (phrase == 'go') {
//         result = "green";
//     }
//     else {
//         result = "purple";
//     }
//     console.log(result);
//     //AND THIS LINE ↑↑↑↑↑
// }

//Notes from above : make sure to use the comparison operator, not just an equals sign
// const password = prompt('Feed me a password');

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) { console.log("Valid Password") }
//     else { console.log("Password cannot contain spaces") }
// } else { console.log("Password is too short. Must be 6+ characters") }

// const userInput = prompt("enter something");
// if (userInput) {
//     alert("Truthy")
//     //If user provides input, it is truthy
// } else { alert("Falsy") }

//Let's make an array!
// const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// // daysOfTheWeek.push("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
// console.log(daysOfTheWeek[5]);

// let beatles = ["John", "Paul", "George"];
// console.log(beatles[beatles.length - 1]);
// beatles.push("Ringo");
// console.log(beatles[beatles.length - 1]);

// const nails = ["blue", "black", "grey", "french", "purple"];
// console.log(nails[0]);
// nails.unshift("green");
// console.log(nails[0]);
// console.log(nails[1]);
// console.log(nails[2]);
// console.log(nails[3]);
// console.log(nails[4]);
// console.log("day2");
// let nailColor = nails.shift();
// console.log(nailColor);

// nails.reverse()
// console.log(nailColor)
// console.log(nails[0])

const ticTac = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

ticTac.splice([0][0], 1, "x");

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];


airplaneSeats[3][1] = "Hugo";

