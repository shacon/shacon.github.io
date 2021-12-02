
var colorChoices = ["red", "orangered", "gold", "limegreen", "dodgerblue", "slateblue", "rebeccapurple"]

var currentColor = colorChoices[0];

var divItems = document.getElementsByClassName("shape");

function clear() {
  for(var i=0; i < divItems.length; i++) {
    var item = divItems[i];
    item.style.backgroundColor = 'white';
  }
}

function getNextColor(currentColor) {
	currentIndex = this.colorChoices.indexOf(currentColor);
	if (currentIndex < (colorChoices.length - 1)) {
		return colorChoices[currentIndex + 1]
	} else {
		return colorChoices[0]
	}
}


function changeColor(item) {
  console.log('changed color')
  var currentColor = item.style.backgroundColor;
  if (colorChoices.includes(currentColor)) {  	
  	item.style.backgroundColor = "peachpuff"
  	this.currentColor = this.colorChoices[0]
  } else {
  	item.style.backgroundColor = this.currentColor;
  	this.currentColor = getNextColor(this.currentColor)
  }
}