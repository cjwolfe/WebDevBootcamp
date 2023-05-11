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

### Destructuring Objects

### Destructuring Params

Missed 05 10 2023 :/