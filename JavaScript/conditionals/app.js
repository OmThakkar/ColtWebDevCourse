const password = prompt("Please enter your password: ");

if(password.length<6){
    alert("Please enter a password with more than 6 characters");
}

else{
    if(password.indexOf(" ") !== -1){
        alert("Password must not contain spaces");
    }
    else{
        alert("Great Password");
    }
}

//Switch Case

const age = prompt("Enter your age: ")

switch (true) {
    case (age>=18 && age<=100):
        alert("You are eligible to vote");
        break;

    case (age<18 && age>=0):
        alert("You are not eligible to vote");
        break;

    default:
        alert("Please enter a valid age");
        break;
}