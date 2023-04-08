let input = prompt("What would you like to do?")
const todos = ["one", "two"];

//not quite there yet
// making a quick post to say that I am having a travel day thurs april 6th
while (input !== "quit" && input !== "q") {

    if (input === "list") {
        console.log("************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("************")
    };
    // if (input === "new") {
    //     let task = prompt("What task needs completed?")
    //     todos.push(task)
    //     for (let i of todos) {
    //         console.log(`${todos.indexOf(i)} - ${i}`)
    //     }
    // }
    // if (input === "delete") {
    //     for (let i of todos) {
    //         console.log(`${todos.indexOf(i)} - ${i}`)
    //     }
    //     let toRemove = prompt("Which would you like to remove?")
    //     todos = todos.slice(toRemove, 1)
    // }


    input = prompt("What would you like to do?");


}
console.log("You have quit")


// while (input == "new") {


// }
// while