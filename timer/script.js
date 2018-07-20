//Military Time
//Get time you want 
let countdownDate = new Date("Dec 4, 2017 13:30:00").getTime();
console.log(countdownDate);
let x = setInterval(function() {

	//Get the exact time in that moment
	let now = new Date().getTime();

	//Distance from the exact time to time you want
	let distance = countdownDate - now;

	//To make this timer work for greater than an hour,
	//use a combination of moduel and division
	let days = Math.floor(distance/(1000*60*60*24));
	let hours = Math.floor(distance/(1000*60*60));
	let minutes = Math.floor(distance/(1000*60));
	let seconds = Math.floor(distance/(1000));

	let dem = document.getElementById("demo")
	dem.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	if(distance < 0) {
		//Stops the loops running
		clearInterval(x);
		dem.innerHTML = "TIME'S UP!";
	}

}, 0)

