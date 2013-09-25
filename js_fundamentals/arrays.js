// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myFavCars = ['Nissan', 'Honda', 'chevy', 'Beamer', 'Benz', 'Bentley'];
for (i = 0; i <= myFavCars.length-1; i++){
	console.log("My #" + (i+1) + "choice is " + myFavCars[i]);
}

//////////////////////////////
////// OTHER EXERCISES////////
//////////////////////////////
var myFavCars = [{name: "Dodge", type: "Caravan", price: 20000}, {name: "Lexus", type: "IS250", price: 60000}];
for (i = 0; i < myFavCars.length; i++);
var myFavCar = myFavCars[i];
console.log("I have a " + myFavCar.name + "-" + myFavCar.type + " and it costed me: $" + myFavCar.price);



var myFavCars = [{name: "Dodge", type: "Caravan", price: 20000}, {name: "Lexus", type: "IS250", price: 60000}];

function describeCar (car) {
	console.log("I have a " + car.name + "-" + car.type + " and it costed me: $" + car.price)
}


describeCar(myFavCars)