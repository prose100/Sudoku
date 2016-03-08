function Board(boxes) {
	//boxes 0-80
	this.boxes = boxes;
}

Board.prototype.draw = function() {
	for (var boxNum = 0; boxNum<this.boxes.length; boxNum++) {
		var box = this.boxes[boxNum];
		if (box.solution.length == null) {
			(box.content).val(box.solution).css({'display':'block'});
		}
	}
}

Board.prototype.getRow = function(rowNumber) {
	//Get only the solved boxes from the numbered row on the game board
	var row = [];
	for (var i = 0; i<9; i++) {
		var box = this.boxes[9*rowNumber+i];
		if (box.solution.length == null) {
			row.push(box.solution);
		}
	}
	return row;
}

Board.prototype.getCol = function(colNumber) {
	//Get only the solved boxes from the numbered col on the game board
	var col = [];
	for (var i = 0; i<9; i++) {
		var box = this.boxes[9*i+(colNumber)];
		if (box.solution.length == null) {
			col.push(box.solution);
		}
	}
	return col;
}

Board.prototype.getSection = function(rowNumber, colNumber) {
	var sec = [];
	var boxNum = Board.prototype.getSecLocation.call(this, rowNumber, colNumber);

	for (var i=0; i<3; i++) {
		for (var j=0; j<3;j++) {
			var box = this.boxes[boxNum];
			if (box.solution.length == null) {
				sec.push(box.solution)
			}
			boxNum = boxNum + 1;
		}
		boxNum = boxNum + 6;
	}
	return sec;	
}


Board.prototype.getSecLocation = function(rowNumber, colNumber) {
	if (inRange(rowNumber, 0, 2) && inRange(colNumber, 0, 2)) {
		return 0;
	}
	if (inRange(rowNumber, 0, 2) && inRange(colNumber, 3, 5)) {
		return 3;
	}
	if (inRange(rowNumber, 0, 2) && inRange(colNumber, 6, 8)) {
		return 6;
	}
	if (inRange(rowNumber, 3, 5) && inRange(colNumber, 0, 2)) {
		return 27;
	}
	if (inRange(rowNumber, 3, 5) && inRange(colNumber, 3, 5)) {
		return 30;
	}
	if (inRange(rowNumber, 3, 5) && inRange(colNumber, 6, 8)) {
		return 33;
	}
	if (inRange(rowNumber, 6, 8) && inRange(colNumber, 0, 2)) {
		return 54;
	}
	if (inRange(rowNumber, 6, 8) && inRange(colNumber, 3, 5)) {
		return 57;
	}
	if (inRange(rowNumber, 6, 8) && inRange(colNumber, 6, 8)) {
		return 60;
	}
}

function inRange(number, lowerLimit, upperLimit) {
	if (number>=lowerLimit && number<=upperLimit) {
		return true;
	} else {
		return false;
	}
}

Board.prototype.removeFromSolution = function() {
	//Remove impossible values for the solution from a box
	//that has not been solved yet
	for (var boxNum = 0; boxNum<this.boxes.length; boxNum++) {
		var box = this.boxes[boxNum];
		if ((box.solution.length) != null) {
			var rowValues = Board.prototype.getRow.call(this, box.i);
			box.solution = remove(rowValues, box.solution);
			var colValues = Board.prototype.getCol.call(this, box.j);
			box.solution = remove(colValues, box.solution);
			var secValues = Board.prototype.getSection.call(this, box.i, box.j);
			box.solution = remove(secValues, box.solution);
			box.solution = convertArrayToSingleValue(box.solution);
		}
	}
}

function convertArrayToSingleValue(array) {
	if (array.length == 1) {
		return array[0];
	} else {
		return array;
	}
}

function remove(subset, set) {
	//Helper function to remove value(s) from an array
	var newArr = [];
	for (var i = 0; i<subset.length; i++) {
		searchValue=subset[i];
		set=($(set).not([searchValue]));
			for (var j=0; j<set.length; j++){
			 	newArr.push(set[j]);
			}
		set = newArr;
		newArr=[];		
	}
	return set;
}
