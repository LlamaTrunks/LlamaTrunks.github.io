
//I have 6 individual dice images and Javascript is selecting them to be able to be displayed in the browser
let images = ["dice-01.svg",
	"dice-02.svg",
	"dice-03.svg",
	"dice-04.svg",
	"dice-05.svg",
	"dice-06.svg"];
let dice = document.querySelectorAll("img");

//function for casino dice
function roll() {

};

//function that displays results whenever you reload the page
setTimeout(function () {
	{

	};

	//set the value of both die randomly
	let dieOneValue = Math.floor(Math.random() * 6);
	let dieTwoValue = Math.floor(Math.random() * 6);
	
	
	
	//show the value as a number but also as images
	document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
	document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
	document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));





},

//This is the amount of time it takes to show value
	1000
);

roll();
//Alert for page as a Bet wager
function placeBet() {

	Bet1 = prompt("How much would you like to bet?");

}
