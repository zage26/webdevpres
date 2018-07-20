$(document).ready(function() {
	let popupDiv = $(".popupDiv");
	let popup = $("#myPopup");

	popupDiv.on("click", function() {
		popup.toggleClass("show");
	})
})