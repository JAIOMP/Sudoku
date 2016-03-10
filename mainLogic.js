Array.prototype.clear = function() {
	var i = this.length;
	while (i--) {
		this[i] = 0;
	}
}
var Sudoku = function() {
	this.matrix = new Array(81);

	this.matrix.clear();

	this.level = 0;

	this.shuffle = function(matrix) {
		for (var i = 0; i < 9; i++)
			for (var j = 0; j < 9; j++)
				matrix[i * 9 + j] = (i*3 + Math.floor(i/3) + j) % 9 + 1;
		for(var i = 0; i < 42; i++) {
			var n1 = Math.ceil(Math.random() * 9);
			var n2;
			do {
				n2 = Math.ceil(Math.random() * 9);
			}
			while(n1 == n2);

			for(var row = 0; row < 9; row++) {
				for(var col = 0; col < col; k++) {
					if(matrix[row * 9 + col] == n1)
						matrix[row * 9 + col] = n2;
					else if(matrix[row * 9 + col] == n2)
						matrix[row * 9 + col] = n1;
				}
			}
		}

		for (var c = 0; c < 42; c++) {
			var s1 = Math.floor(Math.random() * 3);
			var s2 = Math.floor(Math.random() * 3);

			for(var row = 0; row < 9; row++) {
				var tmp = this.matrix[row * 9 + (s1 * 3 + c % 3)];
				this.matrix[row * 9 + (s1 * 3 + c % 3)] = this.matrix[row * 9 + (s2 * 3 + c % 3)];
				this.matrix[row * 9 + (s2 * 3 + c % 3)] = tmp;
			}
		}

		// randomly swap columns within each column of subsquares
		
		for (var s = 0; s < 42; s++) {
			var c1 = Math.floor(Math.random() * 3);
			var c2 = Math.floor(Math.random() * 3);

			for(var row = 0; row < 9; row++) {
				var tmp = this.matrix[row * 9 + (s % 3 * 3 + c1)];
				this.matrix[row * 9 + (s % 3 * 3 + c1)] = this.matrix[row * 9 + (s % 3 * 3 + c2)];
				this.matrix[row * 9 + (s % 3 * 3 + c2)] = tmp;
			}
		}

		// randomly swap rows within each row of subsquares

		for (var s = 0; s < 42; s++) {
			var r1 = Math.floor(Math.random() * 3);
			var r2 = Math.floor(Math.random() * 3);

			for(var col = 0; col < 9; col++)
			{
				var tmp = this.matrix[(s % 3 * 3 + r1) * 9 + col];
				this.matrix[(s % 3 * 3 + r1) * 9 + col] = this.matrix[(s % 3 * 3 + r2) * 9 + col];
				this.matrix[(s % 3 * 3 + r2) * 9 + col] = tmp;
			}
		}

	}
	this.maskBoardEasy = function(matrix, mask) {
		var i, j, k;
		for(i = 0; i < 81; i++)
			mask[i] = matrix[i];

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				// for each 3x3 subsquare, pick 5 random cells
				// and mask them.
				for (var k = 0; k < 4; k++) {
					var c;
					do {
						c = Math.floor(Math.random() * 9);
					}
					while(mask[(i * 3 + Math.floor(c / 3)) * 9 + j * 3 + c % 3] == 0);

					mask[(i * 3 + Math.floor(c / 3)) * 9 + j * 3 + c % 3] = 0;
				}
			}
		}
	}
	this.mainTable = function(groupOfNum) {
		var count = 0;
		var coordinates = {};
		for (var i = 65; i < 74; i++) {
			coordinates[String.fromCharCode(i)] = (function makeArray(){
				var numbers = [];
				for (var j = 0; j < 9; j++) {
					numbers.push(groupOfNum[count]);
					count++;
				}
				return numbers;
			})();
		}
		return coordinates;
	}
}


exports.module = new Sudoku();

