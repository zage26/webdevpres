function selector(restriction, items) {
	for(let i = 0; i < items.length; i++) {
		if(items[i].innerHTML.indexOf(restriction) > -1) {
			items[i].style.display="";
			console.log(items[i].innerHTML);
		} 
		else {
			items[i].style.display="none";
		}
	}
}

let input = document.getElementsByTagName("input")[0]; 
input.addEventListener("keyup", function() {
	let inputCase = input.value;
	let list = document.getElementsByTagName("li");
	selector(inputCase,list);
});