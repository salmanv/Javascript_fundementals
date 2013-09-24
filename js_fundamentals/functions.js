// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
var numberOfChildren = 5;
var partnersName = 'Salman';
var geographicLocation = 'Richmond HIll';
var jobTitle = 'House Wife';

var fortuneGreeting = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' +  partnersName + ' with ' + numberOfChildren + ' kids.';

console.log(fortuneGreeting);
// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
var currentYear = 2013;
var birthYear = 1963;
var possibleAge = 'They are ' + (currentYear - birthYear) + ' or ' + ((currentYear - birthYear)-1) ;

console.log(possibleAge);
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var currentAge = 24;
var maxAge = 70;
var perDay = 25;
var totalNeeded ='You will need ' + (maxAge - currentAge)*365*perDay + ' cigarettes to last you until the ripe old age of ' + maxAge;
console.log( totalNeeded);



// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10;
var pi = 3.141592;
var circumference = (2*(pi*radius));
var area = pi*(radius*radius);

console.log("The circumference is " + circumference + " and the area is " + area)


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
//Fortue teller exercise 

var celsius = 26;
var fahrenheit = 87;
var cCon = ((celsius*9)/5)+32;
var fCon = ((fahrenheit - 32)*5)/9;

console.log(celsius + "degrees celsius is " + cCon + "and " + fahrenheit + " degrees fahrenheit is " + fCon);


