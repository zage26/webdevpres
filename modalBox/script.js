let modal = document.getElementById("modal-box");
let button = document.getElementById("menuBtn");
let closeBtn = document.getElementsByClassName("close-btn")[0];

button.addEventListener("click", function() {
	modal.style.display = "block";
})

closeBtn.addEventListener("click", function() {
	modal.style.display = "none";
})

//close it without clicking the x-button
//event = click
window.addEventListener("click", function(event) {
	if(event.target === modal) {
		modal.style.display = "none";
	}
})

//Can also make a "keydown" escape event listener
//so when you click the "esc" button the modal box closes 
