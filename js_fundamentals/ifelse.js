// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greatNum (x, y){
	if (x>y){
	var higherNum = x;		
	}
	else{     
 		var higherNum = y
	}
	console.log("The greater number of " + x + " and " + y + " is " + higherNum);
}



greatNum(10, 2);
greatNum(34, 87);
greatNum(32, 23);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld (langCode) {
    if (langCode == 'pk'){
		console.log("Kya haal hai, Duniya ");
	}
		
	else if (langCode == 'fr'){
		console.log("Bonjour le world");
	}
	else{
		console.log("Hello World!!");
	}
}

helloWorld('english');
helloWorld('pk');
helloWorld('fr');


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


function assignGrade (numScore) {
	if (numScore >= 90){
		console.log("You got a A");
	}
	else if (numScore >= 80 && numScore <= 89){
		console.log("You got a B");
	}
	else if (numScore >= 70 && numScore <= 79){
		console.log("You got a C");
	}
	else if (numScore >= 50 && numScore <= 69){
		console.log("You got a d");
	}
	else{
		console.log("You got a F (try harder next time!)");
	}

}

assignGrade(98)
assignGrade(88)
assignGrade(77)
assignGrade(66)
assignGrade(55)
assignGrade(59)
assignGrade(49)
assignGrade(33)
assignGrade(99)
assignGrade(89)
assignGrade(77)

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize (noun, number) {
	 if (number <=1 /*&& noun != 'sheep' && noun != 'geese'*/){
		console.log(number + " " + noun);
	}
	else {
		console.log(number + " " + noun + "s ");
	}
}

pluralize('Lion', 4);
pluralize('Lion', 1);
pluralize('Tiger', 1);
pluralize('Tiger', 15);


