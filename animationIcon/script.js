let a = document.getElementById("countdown");
console.log(a);


function countdown() {
	// let num = 1000;
	// for(let i = 0; i < num; i++) {
	// 	setTimeout(function(){
	// 		a.innerHTML = num - i;
	// 	},i * 1000);
	// }

	setTimeout(function(){
		a.innerHTML = "&#xf244;";
	}, 1000);
	setTimeout(function(){
		a.innerHTML = "&#xf243;";
	}, 2000);
	setTimeout(function(){
		a.innerHTML = "&#xf241;";
	}, 3000);


	// setTimeout(function(){
	// 	a.innerHTML = "&#xf105;";
	// }, 500);
	// setTimeout(function(){
	// 	a.innerHTML = "&#xf101;";
	// }, 1000);
}

// setInterval(countdown, 1500);
setInterval(countdown, 4000);











