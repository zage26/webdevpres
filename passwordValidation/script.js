let myInput = document.getElementById("psw");
let number = document.getElementById("number");
let length = document.getElementById("length");

//Basically faster ways to do addEventListener thing

//When input clicked on, selects it
myInput.onfocus = function() {
	document.getElementById("message").style.display = "block";
}
//When input clicked on, DE-selects it
myInput.onblur = function() {
	document.getElementById("message").style.display = "none";
}

//Use REGRX <-- review this
myInput.onkeyup = function() {
	//Checks number
	let numbers = /\d/g;
	if(myInput.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.add("invalid");
		number.classList.remove("valid");
	}
	//Checks length
	if(myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.add("invalid");
		length.classList.remove("valid");
	}
}