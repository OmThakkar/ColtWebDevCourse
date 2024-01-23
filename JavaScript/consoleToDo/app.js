let userInput = prompt("What do you want to do?");
let toDos = [];

while (userInput.toLocaleLowerCase() !== 'quit') {

    if (userInput.toLocaleLowerCase() === 'new') {
        let task = prompt("Enter your task: ");
        toDos.push(task);
        console.log(`Added ${task} to List`);
    }
    else if (userInput.toLocaleLowerCase() === 'list') {
        console.log("\n===========")
        console.log("Your Todos");
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log("===========\n")
    }
    else if (userInput.toLowerCase() === 'delete') {
        let deletion = parseInt(prompt("Enter the index of the task to be deleted: "));
        if (deletion < toDos.length) {
            console.log(`Deleted ${toDos[deletion]}!`)
            toDos.splice(deletion, 1);
        }
        else{
            deletion = alert("Please enter a valid index!");
        }
    }
    else {
        userInput = prompt("Please choose a valid opiton");
    }

    userInput = prompt("What do you want to do?");
}

if (userInput.toLocaleLowerCase() === 'quit') {
    alert("Thank for using Console Todo!");
}
