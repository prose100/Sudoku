function Box(i, j, solution) {
	this.content = $('<div>').addClass('box')
							.css({'display':'none'})
							.prepend($('<input>')
							.val(solution))
							.appendTo($('.gameBoard'));
	this.i = i;
	this.j = j;
	this.solution = solution;
}