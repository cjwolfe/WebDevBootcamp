// loops!
//Basic bitch for loop
// for (let i = 1; i <= 69; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 6; i++) {
//     console.log("Da ba dee da ba daa");
// }

// for (let i = 0; i < 21; i += 2) {
//     console.log(i)
// }
// for (let i = 25; i >= 0; i -= 5) { console.log(i) }


// looping over arrays
// const newArray = ["Eenie", "Meenie", "Miney", "Moe"]
// for (let index = 0; index < newArray.length; index++) {
//     console.log(newArray[index]);

// }
// for (let index = newArray.length - 1; index >= 0; index--) {
//     console.log(newArray[index]);
// }
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (var i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }
for (let i = 1; i <= 10; i++) {
    console.log(`i is equal t:${i}`)
    for (let j = 0; j <= 2; j++) { console.log(`    j is ${j}`) }
}
let example = 1;
while (example <= 10) {
    console.log(`Our While loop is at ${example}`);
    example++;
}