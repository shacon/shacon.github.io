var showLives = document.getElementById("mylives");
var button1 = document.getElementById("myButton");
var count = document.getElementById("myCount");
var showLetter = document.getElementById("letterSelected");
var counted = 0;
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var currentNumber = 0;
var countDiv = document.getElementById("countDiv");
var colorChangeDiv = document.getElementById("changeColor");

// incrementCount = function () {
//   counted ++;
//   count.innerHTML = `The new count is ${counted}`
// }


// function processButtonClick(letter) {
// 	showLives.innerHTML = 'This is from the javascript file!'
// 	showLetter.innerHTML = letter;
// 	console.log('here')
// 	console.log(letter)
// 	incrementCount();
// }

// button1.onclick = function (event) {
//   processButtonClick(event)
// }


// addButton.onclick = function (event) {
// 	currentNumber = currentNumber + 1;
// 	countDiv.innerHTML = currentNumber;
// }

// subtractButton.onclick = function (event) {
// 	currentNumber = currentNumber - 1;
// 	countDiv.innerHTML = currentNumber;
// }

var colorState = "original"

colorChangeDiv.onclick = function (event) {
	console.log(colorChangeDiv.style.backgroundColor)
	if (colorState === "changed") {
		colorState = "original"
		colorChangeDiv.style.backgroundColor = "peachpuff"
	} else {
		colorState = "changed"
		colorChangeDiv.style.backgroundColor = "#ade1bb";
	}
	
}

