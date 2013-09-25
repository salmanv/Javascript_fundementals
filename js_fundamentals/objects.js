// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var myFavRecipe = {title: "Stuffed-Chicken", servings: 4, ingredients: ['1 whole chicken', 'Hot sauce', 'Yogurt', 'Chili peppers', 'Salt']};
console.log("My favourite recipe is: " + myFavRecipe.title);
console.log("It serves: " + myFavRecipe.servings);

console.log("The ingredients you would need are: ");

for (var i = 0; i < myFavRecipe.ingredients.length; i++){
console.log((i+1) + ".)  " + myFavRecipe.ingredients[i]);
}


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


// var myLibrary =  {book1: {title: "1984", author: "George Orwell", alreadyRead: true}, book2: {title: "Some Ruby Book", author: "Something METZ", alreadyRead: false}, book3: {title: "Hacking Electronics", author: "ROB Bitmaker", alreadyRead: false}};
// console.log("\"" + myLibrary.book1.title+ "\"" + " by: " + myLibrary.book1.author);
// console.log("\"" + myLibrary.book2.title+ "\"" + " by: " + myLibrary.book2.author);
// console.log("\"" + myLibrary.book3.title+ "\"" + " by: " + myLibrary.book3.author);



// console.log(myLibrary.book1);
// console.log(myLibrary.book2);
// console.log(myLibrary.book3);

// , book: {title: "Some Ruby Book", author: "Something METZ", alreadyRead: 2}, book: ;


var myLibrary =  [{title: "1984", author: "George Orwell", alreadyRead: true}, {title: "Some Ruby Book", author: "Something METZ", alreadyRead: false}, {title: "Hacking Electronics", author: "ROB Bitmaker", alreadyRead: false}];
for(var x = 0; x < myLibrary.length; x++){
	var library = myLibrary[x];
	var libraryInfo = library.title + "  " + library.author;
		if (library.alreadyRead) {
			console.log('You already read' + " " + libraryInfo);
		}
		else{
			console.log('You sill need to read ' + " " + libraryInfo);
		}
	}
// 				)
// 		}
// 				)
// 		}
// }
// 	console.log("\"" + myLibrary.title + "\"" + " by: " + myLibrary.title);
// }


// console.log(myLibrary.title)

// console.log(;
// console.log("\"" + myLibrary.book2.title+ "\"" + " by: " + myLibrary.book2.author);
// console.log("\"" + myLibrary.book3.title+ "\"" + " by: " + myLibrary.book3.author);
// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myMovie = {title: "BatMan Returns", duration: 185, stars: ["Batman", "joker", "robin", "2 face"]};

function outputMovie(movie){
	console.log("\"" + movie.title + "\"" + " lasts for: " + movie.duration + "minutes. It stars: " + movie.stars)
}

outputMovie(myMovie); 


































































