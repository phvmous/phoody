
/*	phoody 1.0 - by Thomas Pham
*	tom@phamous.co
*
*	Licensed under the MIT License
*	
*	Visit https://github.com/phvmous/phoody for documentation and any updates.
*/

// starts with a prompt

messageChoice();

function messageChoice() {
	var message = prompt("How would you like phoody to help you? Type 'A' to pick a type of food for me. Or type 'B' to save a list of places to eat").toUpperCase();

	if (message == "A") {
		alert("phoody will randomly choose a type of food for you to eat, click ok to begin.");
		pickPlace();
	}
	else if (message == "B") {
		alert("phoody will store places you like to eat at and choose randomly, click ok to begin.");
		favoritePlaces();
	}
	else {
		alert("Please pick a valid choice, more will come later");
		console.log(message);
	}
}

// Choice A. phoody picks a random place to eat for you

function restaurant(place, number, address, district) {
	this.place = place;
	this.number = number;
	this.address = address;
	this.district = district;
}

// american restaurants
var chucks = new restaurant("Chuck's Burger", "090 211 9530", "196 Le Lai", "Ben Thanh D1");
var	conBo = new restaurant("Con Bo Map", "08 3824 6607", "178/4b Pastuer", "D1");
var jj = new restaurant("JJ Fish and Chips", "0126 290 9077", "Some where on Ly Thai To", "D10");
var roastBeast = new restaurant("Roast Beast", "090 603 13 42" ,"Ly Thai To", "D10");
var quanUt = new restaurant("Quan Ut Ut", "08 3914 4500", "168 Vo Van Kiet", "D1");
var ben = new restaurant("Ben Style", "090 691 2730 ", "Co Bac", "D1");
var biaCraft = new restaurant("Bia Craft", "08 3744 6863", "90 Xuan Thuy", "D2");

// vietnamese restaurants
var quanThanhBinh = new restaurant("Quan an Thanh Binh", "08 3823 2412", "146 Le Thanh Ton", "Ben Thanh D1");
var nowZone = new restaurant("Cham Do Com", "N/A", "235 Nguyen Van Cu / Nowzone", "D1");
var papaXot = new restaurant("Papa Xot", "08 6680 2121", "214 Nguyen Trai", "D1");

// japanese restaurants
var osaka = new restaurant("Osaka Ramen", "08 5412 3940", "Phu My Hung", "D7");
var tokyoDeli = new restaurant("Tokyo Deli", "N/A", "Nguyen Thi Thap", "D7");
var goku = new restaurant("Goku Raku Ramen", "08 3822 5011", "241 Ly Tu Trong", "D1");
var achaya = new restaurant("Achaya", "093 897 20 50", "90 Le Loi", "D1");

// indian restaurants
var ganesh = new restaurant("Ganesh", "08 54101627", "Phu My Hung", "D7");

// korean restaurants
var thichThit = new restaurant("Thich Thit", "08 6291 2213", "75 Dien Bien Phu", "D1");
var papas = new restaurant("Papas Beer and Chicken", "08 5410 0454", "Phu My Hung", "D7");
var gogi = new restaurant("Gogi House", "08 3837 7228", "189 Nguyen Thai Hoc", "D1");

// beaner restaurants
var calib = new restaurant("Cali Burrito", "090 255 0533", "Phu My Hung", "D7");
var tres = new restaurant("Tres Ninos", "093 436 6660", "207 Bui Vien", "D1");


// add in your restaurant objects into the arrays
var american = [chucks, conBo, jj, roastBeast, quanUt, ben, biaCraft];
var vietnamese = [quanThanhBinh, nowZone, papaXot];
var japanese = [osaka, tokyoDeli, goku, achaya];
var indian = [ganesh];
var korean = [thichThit, papas, gogi];
var beaner = [calib, tres];

function pickPlace() {

	var foodType = prompt("What sort of food do you want to eat? Indian, Vietnamese, Japanese, Korean, American, or Beaner.").toLowerCase();

	switch(foodType) {
		case "american":
			alert("Uncle Sam says to eat: " + american[Math.floor(Math.random()*american.length)]);
			break;
		case "vietnamese":
			alert("All that taste and smell. Eat:" + vietnamese[Math.floor(Math.random()*vietnamese.length)]);
			break;
		case "japanese":
			alert("Watch anime and eat: " + japanese[Math.floor(Math.random()*japanese.length)]);
			break;
		case "indian":
			alert("Mmm this code is beginning to smell like curry: " + indian[Math.floor(Math.random()*indian.length)]);
			break;
		case "korean":
			alert("Seriously? All you eat is Korean fried chicken and BBQ.. phoody says to eat: " + korean[Math.floor(Math.random()*korean.length)]);
			break;
		case "beaner":
			alert("Bravo, good choice if you have munchies, eat: " + beaner[Math.floor(Math.random()*beaner.length)]);
			break;
		default:
			alert("Read English Bruh. You obviously didn't pick from the available choices... Or just cook at home.");
			break;
	}
}

// Choice B. user stores choices into an array for phoody to choose randomly
var foodPlaces = [];

function favoritePlaces() {
	var eatWhere = prompt("Enter in as many places you like to eat at (seperated by a ,)").split(",");
	foodPlaces.push(eatWhere);
	foodPlaces.shuffle();
	alert("Phoody chose " + foodPlaces[Math.floor(Math.random()*foodPlaces.length)] + " for you.");
}

