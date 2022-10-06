/* Hex Code Array*/
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* Get btn id from html document*/
const btn = document.getElementById("btn");

/*Make it easier to access the body*/
let color = document.body.style;

/*Do somwthing when button is clicked*/
btn.addEventListener("click", function() {

	let hexColor = "#";

	for (let i = 0; i < 6; i++) {

		hexColor += hex[randomNumbers()];

	}

	/*Make the Hex code appear in the browser*/
	document.getElementById("display").textContent = hexColor;

	console.log(hexColor);

	color.backgroundColor = hexColor;

});

/*Create a random number function*/
function randomNumbers() {

	return Math.floor(Math.random() * hex.length);
}