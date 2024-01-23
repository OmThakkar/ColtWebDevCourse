let input = prompt("Say something!");

while(true){
    input = prompt(input);
    if(input.toLocaleLowerCase() === "stop copying me") {
        break;
    }
}

console.log("OK YOU WIN");
