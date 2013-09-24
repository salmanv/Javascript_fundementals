// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var x = 0; x <= 20; x++){
    if(x % 2 ===0){
		console.log(x + " is even ");
	}
	
	else{
		console.log(x + " is odd");
	}
}



// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++){
	console.log(i + " X 9 = " + i*9);
}


// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


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


















