Numbers
Javascript has only one number type (no ints, floats, etc)
Basic Math
+, -, /, *, %

** Exponentiation - Raise to some power
2^4 is ``2**4``

% Modulo

``9 % 2 = 1``

Common for determining if a number is even or odd

PEMDAS

Comments
//

NaN
Not a number (technically a number itself in JS) - Represents non-numerical things
0/0 = NaN
1+NaN= NaN

Variables

Variables are not automatically updated in JS
// Define a variable called myLuckyNumber and set it equal to 37
let myLuckyNumber = 37;

+= is a change to a variable 

``score += 5`` will add 5 to the score

const - same as let, but cannot be changed

var - old way to declare variables, and now that const and let exist, not necessary to use it

Strings
Don't Mix '' and "" unless you need to express one or the other.
camelCaseForTheWin

let bestColor = "purple";
let quote = 'You had me at "hello"'

Strings are indexed

.length method gives you the length of a string in human (not computer) terms

## Methods

thing.method() will do an action of the method
``` js
let msg = "hello world       ";
// Output = "hello world      "
let bigMsg = msg.trim().toUpperCase();
// Output = "HELLO WORLD"
```
(you can chain together multiple methods in this way)

Methods and Functions are different, but the same!
A method is a function that is a property of an object


### Window object 
Everything falls under this object. In a tabbed browser, each tab is represented by its own Window object; the global window seen by JavaScript code running within a given tab 
always represents the tab in which the code is running. That said, even in a tabbed browser, some properties and methods still apply to the 
overall window that contains the tab, such as resizeTo() and innerHeight. Generally, anything that can't reasonably pertain to a tab pertains 
to the window instead.
https://developer.mozilla.org/en-US/docs/Web/API/Window

## Array Methods:
Require you to pass in a function
1. forEach - loops through each on an array, old way to do it before for of loops
2. map - Loops through each on an array, creates new array with your cool new data
3. Arrow - syntactically compact alternative to a regular function
4. setTimeout - Pass in a function and a time, and it will delay in running the Functions
5. setInterval - Pass in a function and a time, and it will repeat a function
6. filter method - Uses boolean logic to filter an array
7. some - boolean method return t/f, if any amount of the array meets the conditions
8. every - boolean method return t/f, if all of the array meets the conditions
9. reduce - reduces the thing - Accumulator and Current Value. Useful for summing an array

Newer Features
### Default Params
- Like defaults for functions in excel
### Spread in function calls
- allows an iterable such as an array to be *expanded* in places where zero or more arguments or elements are expected
``` js
let nums = [1,2,3,4,5]
Math.max(...nums)
```
Makes an array iterable when a thing expects it not to be, as a function call
### Spread in Array literals
Super useful to combine arrays

### Spread with Objects
Useful to combine things. For example, you would create a new user with form data and assign them admin priveleges based on other information, assign them a user number, etc.
### Rest Params
Allows for capturing an unknown number of parameters... collect the rest of the values
### Destructuring Arrays
Allows for extraction of some elements into standalone variables
``` js
const raceResults = ["mike", "tina", "jim", "rob", "daren"];
const [gold, silver, bronze, ...everyoneElse] = raceResults;
```
- Based on position
### Destructuring Objects
More common than Destructuring an Array
- not necessarily about order
``` js
const runner = {
    first: "usain",
    last: "bolt",
    country: "jamaica"

}
const {first,last,country} = runner;
// "make me three variables called first, last, and country
// from the existing variable runner"
```
You can also do the above while renaming everything
``` js
const {first:firstName, last:lastName, country:origin} = runner;
```
anything that doesn't exist as a variable, starts as undefined, but can be expressed as 
``` js
const {bio = "n/a"} = runner;
```
### Destructuring Params

``` js
// function fullName(user){
//     return `${user.firstName} ${user.lastName}`}
// }
function fullName(firstName,lastName){
    return `${firstName} ${lastName}`
}

```
## The world of the DOM
The dom is the Document Object Model.
Video 1: Introducing the DOM
Video 2: More Dom, More mom
Video 3: GetElementByID
### GetElementByID
- Selecting
    - getElementById
    - getElementsByTagName
        - returns HTML Collection - which is not an array, but can be looped over.
    - getElementsByClassName
        - returns HTML collection


### Query Selector
- Manipulating
    - loop over html collections
``` js
document.querySelector("#banner");
//Selects banner tag, first one only
document.querySelector(".square");
//Selects square class, first one only
document.querySelector("img:nth-of-type(2)");
//Selects images, 2nd one (nth of type)

document.querySelectorAll(".square");
//Selects square class, all that match

```

querySelector only selects the first one
querySelectorAll selects all that match

CSS selection on the inside.

### Properties and Methods
- Prioritize knowing how to find that info on MDN rather than strict memorization
- Focus on concepts, and accessing information *when needed*.

Changing CSS - everything is camelCase

We will return after workout
We returned after workout.
Today is app state thing, will end up watching a video but no code today.
Today is a travel day
Today is a rest day
Yeah we're doing the thing
Doing more things.
Learned about Class Siblings
Did more things.
Learned about Append and AppendChild
Day off for movies


## Element.insertAdjacentElement()
You can add an element before or after an element
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

### Parameters
Position
Before or after + begin or end
element
the element to be inserted into the tree

## Element.removeChild()
old way: element.selectParent.removeChild()
new way: element.remove()
It's just easier this way.

Watched Pokemon demo, will try it tomorrow.

## DOM Events
1. Intro
