const cats = ["Mittens", "Jareth", "Dorian"];

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here

const firstNames = fullNames.map(function (name) {
    return name.first;
})
// returns first names only from fullNames array

const lastNames = fullNames.map(function (lName) {
    return lName.last;
})