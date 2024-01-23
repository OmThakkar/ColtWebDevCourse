let maximum = parseInt(prompt("Enter the maximum number!"));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;

let guess = (prompt("Enter your guess! (Type q to quit)"));
let count = 1;

while(parseInt(guess) !== targetNum){
    if(guess < targetNum){
        count++;
        guess = prompt("Too low, Guess Again!");
    }
    else if(guess > targetNum){
        count++;
        guess = prompt("Too high, Guess Again!");
    }
    else if(guess.toLocaleLowerCase() === 'q'){
        break;
    }
    else if(guess===targetNum){
        count++;
        break;
    }
    else{
        guess = prompt("Please enter a valid number! (Type q to quit)");
    }
}

if(guess.toLocaleLowerCase()==='q'){
    alert(`Okay you quit! The correct answer was ${targetNum}. It took you ${count} number of guesses`);
}
else{
    alert(`Hurray! You guessed the answer right! It was ${targetNum}. It took you ${count} number of guesses`);
}
