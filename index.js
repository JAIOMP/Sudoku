var sudoku = require('./mainLogic.js')
sudoku.module.shuffle(sudoku.module.matrix);
var solvedMatrix = sudoku.module.matrix;
var mask = [];
sudoku.module.maskBoardEasy(solvedMatrix,mask);
var valuesOfGrid = sudoku.module.mainTable(mask);

//This function display the value in the grid

var DisplaysGridValue = function() {
	for (var index in valuesOfGrid) {
		for (var i = 0; i < valuesOfGrid[index].length; i++) {
			if (valuesOfGrid[index][i] != 0) {
				var cell = document.getElementById(index+(i+1));
				cell.getElementsByTagName('input')[0].value = valuesOfGrid[index][i];
	 			document.getElementById('I'+index+(i+1)).style.color = 'grey';
				document.getElementById('I'+index+(i+1)).readOnly = true;
			}
		}
	}
	timer();
	document.getElementById('quit').style.visibility = 'visible';	
	document.getElementById('start').style.visibility = 'hidden';
}
var solvationOfPuzzle = sudoku.module.mainTable(solvedMatrix);

// This function solve the blank cell in the grid 

var solveTheSudoku = function() {
	for(var index in valuesOfGrid){
		for (var i = 0; i < valuesOfGrid[index].length; i++) {
				var cell = document.getElementById(index+(i+1));
			if (document.getElementById('I'+index+(i+1)).value!= solvationOfPuzzle[index][i]) {
				cell.getElementsByTagName('input')[0].value = solvationOfPuzzle[index][i];
				document.getElementById('I'+index+(i+1)).style.color = 'red';
				document.getElementById('I'+index+(i+1)).readOnly = true;
			}
			else{
				if(valuesOfGrid[index][i] == 0){
					document.getElementById('I'+index+(i+1)).style.color = 'lightGreen';
					document.getElementById('I'+index+(i+1)).readOnly = true;
				}

			}
		}
	}
	clearInterval(progress);
	document.getElementById("quit").hidden = true;
}

//This function show the instruction in index.html page
var showInstructions = function(){
	var help = document.querySelector('#help');
	if((document.getElementById('help').style.visibility == 'hidden')||
		(document.getElementById('help').style.visibility == '')){
		document.getElementById('help').style.visibility = 'visible';
	}
	else{
		document.getElementById('help').style.visibility = 'hidden';
	}

}

//This function show the timer on the page

var progress;
function timer(){
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	progress = setInterval(function(){
		if(seconds==60){
			minutes++;
			seconds = 0;
		}
		if(minutes==60){
			hours++;
			minutes = 0;
		}
		if(seconds<10 ){
			document.getElementById('sec').textContent = 0+""+seconds;
		}
		else{
			document.getElementById('sec').textContent = seconds;
		}
		document.getElementById('minutes').textContent = minutes;
		document.getElementById('hour').textContent = hours;
		seconds++;
	},1000);
}


 