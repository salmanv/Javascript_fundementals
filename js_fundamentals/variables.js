/////////////////////////////VARIABLE EXERCISES
//Fortue teller exercise 

var numberOfChildren = 5;
var partnersName = 'Salman';
var geographicLocation = 'Richmond HIll';
var jobTitle = 'House Wife';

var fortuneGreeting = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' +  partnersName + ' with ' + numberOfChildren + ' kids.';

console.log(fortuneGreeting);

//The age calculator:

var currentYear = 2013;
var birthYear = 1963;
var possibleAge = 'They are ' + (currentYear - birthYear) + ' or ' + ((currentYear - birthYear)-1) ;

console.log(possibleAge);

//lifetime supply calculator
var currentAge = 24;
var maxAge = 70;
var perDay = 25;
var totalNeeded ='You will need ' + (maxAge - currentAge)*365*perDay + ' cigarettes to last you until the ripe old age of ' + maxAge;
console.log( totalNeeded);


//properties of a circle
var radius = 10;
var pi = 3.141592;
var circumference = (2*(pi*radius));
var area = pi*(radius*radius);

console.log("The circumference is " + circumference + " and the area is " + area)


//Temp. converter
var celsius = 26;
var fahrenheit = 87;
var cCon = ((celsius*9)/5)+32;
var fCon = ((fahrenheit - 32)*5)/9;

console.log(celsius + "degrees celsius is " + cCon + "and " + fahrenheit + " degrees fahrenheit is " + fCon);


////////////////////////FUNCTIONS EXERCISES
//The Fortune teller


// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune (numberOfChildren, partnersName, geographicLocation, jobTitle){
	var fortune= "You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnersName + " with " + numberOfChildren + " kids.");
	console.log(fortune;
}
	
tellFortune(3, "Salman Vajid", "Canada", "House Wife");
tellFortune(4, "John Jackson", "Timbuktu", "plumber");
tellFortune(8, "Mr. Jack Smith", "Toronto", "software beta tester");


// The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge (birthYear, currentYear){
	var age = currentYear- birthYear;

	console.log("You are either " + age + " or " + (age-1));

}

calculateAge(1963, 2013);
calculateAge(1988, 2013);
calculateAge(1958, 2013); 


// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
	

function calculateSupply (age, ammountPerDay){
	var maxAge = 70;

	console.log("You will need " + ammountPerDay*365*(maxAge-age) + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(24, 25);
calculateSupply(28, 12);
calculateSupply(28, 14.5);


// The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference 2 PI x radius based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area PI r2 based on the radius, and output "The area is NN".


function calcCircumfrence(radius){
    var circumference = radius;
	console.log("The circumference is " + radius*3.141592*2 + "cm's");
}
calcCircumfrence(10);

function calcArea(radius){
	var area = radius;
	console.log("The area is " + radius*radius*3.141592 + "cm's");
}

calcArea(10);


// The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit (celsius) {
	var temperature = celsius
	console.log(celsius + " degrees C is " + (((celsius*9)/5)+32) + " degrees fahrenheit" );
}
celsiusToFahrenheit(20);


function fahrenheitToCelsius (fahrenheit) {
	var fahrenheitInC = ((fahrenheit-32)*5)/9;
	console.log(fahrenheit + "degrees F is " + fahrenheitInC + " degrees celsius");
}

fahrenheitToCelsius(68);



