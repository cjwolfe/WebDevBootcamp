// Snake Eyes Activity

// function isSnakeEyes(firstDie, secondDie) {
//     if (firstDie === 1 && secondDie === 1) {
//         console.log("Snake Eyes!")
//     } else { console.log("Not Snake Eyes!") }

// }
// // Multiplication activity
// function multiply(x, y) {
//     return x * y;
// }

// //Capitalizes the first letter - with new string

// function capitalize(word) {
//     let firstHalf = word.slice(0, 1).toUpperCase();
//     let lastHalf = word.slice(1);
//     let result = firstHalf + lastHalf;
//     console.log(result)
//     return result;

// }

// //Here is a faster way to do the above, I mostly did my way because I was having trouble with toUpperCase
// function capitalizeVersion2(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }

// //Returns the sum of an array

// function sumArray(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//         console.log(total);
//     }
//     return total;

// }

// //return Day
// //Days in 1-7, reject if null

// function returnDay(day) {
//     if (day > 7 || day < 1) {
//         return null;
//     }
//     const bigDays = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     return bigDays[day];
// }

// //Square
// function square(number) {
//     return number * number;
// }

// //Simple higher level function
// function doItAgain(func) {
//     func();
//     func();
// }



// const secondFunction = doItAgain;

// function doItAThirdTime(f) {
//     f();
//     f();
//     f();
// }

// function makeMultDice(max) {
//     return function (numOfDice) {
//         let dieMin = Math.floor(Math.random() * max);
//         return (numOfDice * dieMin);
//     }
// }


const join = {
    concat(x, y) {
        return x + y;
    },
    square(x) {
        return x * x;
    }





}