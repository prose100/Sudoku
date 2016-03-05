function Board(boxes) {
	this.boxes = boxes;
}

Board.prototype.draw = function() {
	for (var i = 0; i<this.boxes.length; i++) {
		this.boxes[i].content.css({'display':'block'})
	}
}

Board.prototype.getRow = function(rowNumber) {
	var row = [];
	for (var i = 9*(rowNumber-1); i<=(9*rowNumber)-1; i++) {
		row.push(this.boxes[i]);
	}
	return row;
}

Board.prototype.getCol = function(colNumber) {
	var col = [];
	for (var i = 0; i<9; i++) {
		col.push(this.boxes[9*i+(colNumber-1)]);
	}
	return col;
}