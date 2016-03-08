function Box(i, j, solution) {
	this.content = $('<input>').appendTo($('.gameBoard'));
	this.i = i;
	this.j = j;
	this.solution = solution;
}