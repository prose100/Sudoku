function Box(i, j, solution) {
	this.content = $('<div>').addClass('box')
							 .prepend($('<input>')
							 .val(solution))
							 .appendTo($('.gameBoard'));
	this.i = i;
	this.j = j;
	this.solution = solution;
}