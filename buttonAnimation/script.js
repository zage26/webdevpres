let button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
	button1.classList.add("Button_Clicked");
});

let circle2 = document.getElementById("circle2");
//Runs at the end of an animation
circle2.addEventListener("animationend", function() {
	button1.classList.remove("Button_Clicked");
})
