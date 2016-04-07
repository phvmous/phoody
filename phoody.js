
/*	phoody 1.0 by Thomas Pham
*	tom@phamous.co
*
*	Licensed under the MIT License
*	
*	Visit github.com/phvmous/phoody for documentation and updates
*/


var foodPlaces = [];

var placesToEat = function () {
	var eatWhere = prompt("Enter in as many places you like to eat at (seperated by a ,)").toUpperCase().split(",");
	foodPlaces.push(eatWhere);
	for(var i = 0; i < foodPlaces.length; i++) {
		console.log(foodPlaces[i]);
	}
};




