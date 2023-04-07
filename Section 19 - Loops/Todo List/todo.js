const teudeu = ["one", "two"];
let input = prompt("What would you like to do?")
//not quite there yet
// making a quick post to say that I am having a travel day thurs april 6th
while (input !== "quit" && input !== "q") {
    if (input === "new") {
        let task = prompt("What task needs completed?")
        teudeu.push(task)
        for (let i of teudeu) {
            console.log(`${teudeu.indexOf(i)} - ${i}`)
        }
    }
    if (input === "list") {
        for (let i of teudeu) {
            console.log(`${teudeu.indexOf(i)} - ${i}`)
        }
    }
    if (input === "delete") {
        for (let i of teudeu) {
            console.log(`${teudeu.indexOf(i)} - ${i}`)
        }
        let toRemove = prompt("Which would you like to remove?")
        teudeu = teudeu.slice(toRemove, 1)
    }


    // input = prompt("What would you like to do?")


}
console.log("You have quit")


// while (input == "new") {


// }
// while