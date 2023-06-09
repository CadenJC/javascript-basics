// COMPARISON OPERATORS
// Directions: Use the variables below for the comparison operators questions that follow. Each of your answers below should be in a separate console.log.
let compA = 5;
let compB = 8;
let compC = "8";

// 1. Is compB less than or equal to compA?
console.log(compB <= compA)
// 2. Is compB equal to compC?
console.log(compB == compC)
// 3. Is compB strictly equal to compC in value and type?
console.log(compB === compC)
// CONDITIONAL STATEMENTS
// Directions: The variables below represent the number of minutes 3 different students want to study for each weekday while learning JavaScript. Use the varialbes in the conditional statements you'll write for the following scenarios.
let goalA = 15;
let goalB = 30;
let goalC = 90;

// 1. If student A's goal is less than 30 minutes, console.log the following string: `Student A is studying less than 30 minutes each day. Make sure their study methods are effective.`
if (goalA < 30){
    console.log("Student A is studying less than 30 minutes each day. Make sure their study methods are effective.");
}

// 2. If student B's goal is greater than or equal to 30 minutes, console.log the following string: `Student B's goal is to study 30 minutes or more.`
// If not, console.log the following string: `Student B is planning to study less than 30 minutes each day. Check on their availability.`
if (goalB >= 30){
    console.log("Student B's goal is to study 30 minutes or more.");
} else{
    console.log("Student B is planning to study less than 30 minutes each day. Check on their availability.")
}
// 3. Use one condtional statement to do the following:
//If student C's goal is less than 30 minutes, console.log the following string: `Student C is studying less than 30 minutes each day. Make sure their study methods are effective.`

// If student C's goal is less than or equal to 45 minutes, console.log the following string: `Student C's goal is to study between 30 and 45 minutes. Keep encouraging them.`

// If neither of those things are true, console.log the following string: `Student C's goal is to study more than 45 minutes each day. Check in on their capacity.`
if (goalC < 30){
    console.log("Student C is studying less than 30 minutes each day. Make sure their study methods are effective.");
} else  if (goalC <= 45){
    console.log("Student C's goal is to study between 30 and 45 minutes. Keep encouraging them.");
} else {
    console.log("Student C's goal is to study more than 45 minutes each day. Check in on their capacity.")
}
// FUNCTIONS

// 1. Write a function that prints, "Hello World", in the console
function HelloWorld(){
    return console.log("Hello World");
}
HelloWorld()
// 2. Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
function calculateDogAge(Age){
    return console.log("Your doggie is " + Age*7 + " years old in dog years!");
}
calculateDogAge(3)
calculateDogAge(5)
calculateDogAge(9)
// 3. Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - call that function 3 times with 3 different values for the arguments.
function tellFortune(X, Y, Z, N){
    return console.log("You will be a " + X + " in " + Y + ", and married to " + Z + " with " + N + " kids.")
}
tellFortune("Doctor", "Canada", "Gerald", "3" )
tellFortune("Lawyer", "Senegal", "Candice", "2" )
tellFortune("Pilot", "Seychelles", "Steven", "1" )}
// LOOPS

// 1. Make a loop that counts from 0 to 10.  It should print out "The number is" and each integer, from 0 to 10, in the console.
for (let i = 0; i < 11; i++) {
 console.log("The number is " + i);
  }
// 2. Make a loop that counts from 5 to 15 in the console, in multiples of 3. It should print out the number "is a multiple of 3."
for (let i = 5; i < 16; i++) {
    console.log(i*3+ " is a multiple of 3");
     }
// 3. Make a loop that counts backwards from 100 to 0, and prints out in the console.
for (let i = 100; i > -1; i--) {
    console.log(i)
}