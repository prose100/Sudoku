function Board(boxes) {
	this.boxes = boxes;
}

Board.prototype.draw = function() {
	for (var i = 0; i<this.boxes.length; i++) {
		this.boxes[i].content.css({'display':'block'})
	}
}