//UI.js creates user interface for the game
function UI() {
	this.solve = $('<button>')
              .addClass(settings.solveButton_class)
              .html('Solve')
              .css({'display':'inline-block'})
              .appendTo($('.ui'));
}
//solve button
UI.prototype.getSolution = function() {
	return this.solve;
}