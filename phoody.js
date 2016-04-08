
/*	phoody 1.0 by Thomas Pham
*	tom@phamous.co
*
*	Licensed under the MIT License
*	
*	Visit https://github.com/phvmous/phoody for documentation and updates.
*/


// starts with a prompt
var message = prompt("How would you like phoody to help you? Type 'A' to pick a type of food for me. Or type 'B' to save a list of places to eat").toUpperCase();

var messageChoice = function (choice) {
	if (choice === "A") {
		alert("phoody will randomly choose a type of food for you to eat, click ok to begin.");
		pickPlace();
	}
	else if (choice === "B") {
		alert("phoody will store places you like to eat at and choose randomly, click ok to begin.");
		favoritePlaces();
	}
	else (choice !== "A" && choice !== "B"){
		alert("Please pick a valid choice, more will come later");
		console.log(message);
		messageChoice(message);
	}
};


// stores user choices into an array.
var foodPlaces = [];

var favoritePlaces = function () {
	var eatWhere = prompt("Enter in as many places you like to eat at (seperated by a ,)").split(",");
	foodPlaces.push(eatWhere);
	for(var i = 0; i < foodPlaces.length; i++) {
		console.log(foodPlaces[i]);
	}
};




