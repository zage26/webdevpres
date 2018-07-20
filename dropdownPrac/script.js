$(document).ready(function() {

//JQuery version
//Then switch to javascript 
//watch height wv display

	// let btn = $('button')
	let btn = document.querySelector('button')
	// let content = $('#myDropdown');
	let content = document.getElementById('myDropdown')
	//make this later
	let drop = document.getElementById('dropdown')
// CLICK
	// btn.on("click", function() {
	// 	content.toggle();
	// })
//OR
	// btn.addEventListener("click", function() {
	// 	content.classList.toggle("show");
	// })

// HOVER
	// btn.addEventListener("mouseover", function() {
	// 	content.classList.add("show");
	// })
	// btn.addEventListener("mouseout", function() {
	// 	content.classList.remove("show");
	// })

// HOVER - W/ TRANSITION
	drop.addEventListener("mouseover", function() {
		content.classList.add("show");
	})
	drop.addEventListener("mouseout", function() {
		content.classList.remove("show");
	})
})
