const teudeu = [];
function list(teudeu) {

    for (let i of teudeu) {
        return console.log(`${teudeu.indexOf(i)} - ${i}`)
    }
}
const input = prompt("What would you like to do?")
while (input !== "quit" && input !== "q") {
    if (input === "new") {
        let task = prompt("What task needs completed?")
        teudeu.push(task)
        teudeu.list(teudeu)
    }
    if (input === "list") {
        teudeu.list(teudeu)
    }



    break
}
console.log("You have quit")


// while (input == "new") {


// }
// while