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
    } else if (input === "new") {
        let newTask = prompt("What task needs completed?")
        todos.push(newTask)
        console.log(`${newTask} added to list`)
    }
    else if (input === "delete") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        let index = prompt("Which index would you like to delete?");
        console.log(`${todos[index]} removed from list`)
        todos.splice(index, 1);
    }
    // if (input === "new") {

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