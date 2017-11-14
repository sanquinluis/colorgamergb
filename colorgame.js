// array of basic colors set to default when the game starts
var numSquares = 6;
var colors = [];	
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons(){
	// looping through mode buttons
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});

	}

}


function setupSquares(){
	for(var i = 0;i < squares.length; i++){
		//add initial colors to squares
			squares[i].style.backgroundColor = colors[i]
			// add event listener
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


}

function reset (){
		colors = generateRandomColors(numSquares);
	// pick a new color form array
		pickedColor = pickColor();
	// change color display to match picked color
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";

		messageDisplay.textContent = "";
	// chance colors of squares
		for(var i = 0; i <squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

}
// Reset the game function
	resetButton.addEventListener("click", function(){
		reset();
});

	// colorDisplay.textContent = pickedColor;
	
		
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





