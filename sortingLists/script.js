let button = document.getElementById("sort");
button.addEventListener("click", function() {
	sortList();
})

let button2 = document.getElementById("sort2");
button2.addEventListener("click", function() {
	sortListBothWays();
})

function sortList() {
	let elements = document.getElementById("list").getElementsByTagName("li");
	let switching = true;
	let shouldSwitch = false;
	let i = 0;
	while(switching) {
		switching = false;
		for(i = 0; i < (elements.length-1); i++) {
			shouldSwitch = false;
			if(elements[i].innerHTML.toLowerCase() > elements[i+1].innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if(shouldSwitch) {
			elements[i].parentNode.insertBefore(elements[i+1], elements[i]);
			switching = true;
		}
	}

}

function sortListBothWays() {
	let elements = document.getElementById("list2").getElementsByTagName("li");
	let switching = true;
	let shouldSwitch = false;
	let i = 0;

	let dir = "ascending";

	let switchCount = 0;

	while(switching) {
		switching = false;
		for(i = 0; i < (elements.length-1); i++) {
			shouldSwitch = false;
			if(dir === "ascending") {
				if(elements[i].innerHTML.toLowerCase() > elements[i+1].innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (dir === "descending") {
				if(elements[i].innerHTML.toLowerCase() < elements[i+1].innerHTML.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if(shouldSwitch) {
			elements[i].parentNode.insertBefore(elements[i+1], elements[i]);
			switching = true;
			switchCount++;
		} else if (switchCount === 0 && dir === "ascending") {
			dir = "descending"
			switching = true;
		}
	}

}