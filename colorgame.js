// array of basic colors set to default when the game starts
var numSquares = 6;
var colors = generateRandomColors(numSquares);
// hard coded array
// [
// 	"rgb(255, 0, 0)",
// 	"rgb(255,255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// 	]
	// selecting with querySelectorAll the class square to loop and set up the colors.
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// changing the easy and hard mode
easyBtn.addEventListener("click", function(){
	// alert("hey Easy");
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	// alert("Hey Hard");
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});



// Reset the game function
	resetButton.addEventListener("click", function(){
	// generate all new colors
		colors = generateRandomColors(6);
	// pick a new color form array
		pickedColor = pickColor();
	// change color display to match picked color
		colorDisplay.textContent = pickedColor;
	// chance colors of squares
		for(var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	// alert("hey");
});

	colorDisplay.textContent = pickedColor;
	
		for(var i = 0;i < squares.length; i++){
		//add initial colors to squares
			squares[i].style.backgroundColor = colors[i]

			squares[i].addEventListener("click", function(){
			//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				console.log(clickedColor, pickedColor);
			// compare color to pickedColor
					if(clickedColor === pickedColor){
						messageDisplay.textContent = "Correct!!";
						resetButton.textContent = "Play Again!";
						changeColors(clickedColor);
						h1.style.backgroundColor = clickedColor;

					}else {
						this.style.backgroundColor = "#232323";
						messageDisplay.textContent = "Try Again";
				}
		});
			
	}
	//function that loops throgh the array of colors and change them to the same color
function changeColors(color){
		//loop through all squares
		for(var i = 0; i < squares.length; i++){
			//change each color to match given color
			squares[i].style.backgroundColor = color;
		}
	}

function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
// repeat num times 
	for(var i = 0; i < num; i++){
		// get random color push into empty arr
		arr.push(randomColor());
	}
	// empty to empty array
	return arr
}

function randomColor(){
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





