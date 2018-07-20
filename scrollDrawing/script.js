let square = document.getElementById("square");
let length = square.getTotalLength();

//Set start position
square.style.strokeDasharray = length;
//ONly draw when scroll
square.style.strokeDathoffset = length;

window.addEventListener("scroll", myFunction);

//User draw object based on how much they scroll
function myFunction() {
	let scrollPercent = (document.body.scrollingTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	let draw = length * scrollPercent;

	square.style.strokeDashoffset = length - draw;
}