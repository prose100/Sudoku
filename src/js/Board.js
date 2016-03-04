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
	for (var i = 9*(rowNumber-1); i<(9*rowNumber)-1; i++) {
		row.push(this.boxes[i]);
	}
	return row;
}