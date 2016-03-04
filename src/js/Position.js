//Not Used Yet
function Position(x, y) {
	this.x = x;
	this.y = y;
}

//setters
Position.prototype.setPositionX = function(x) {
  this.x = x;
}
Position.prototype.setPositionY = function(y) {
  this.y = y;
}

//getters
Position.prototype.getPositionX = function() {
  return this.x;
}
Position.prototype.getPositionY = function() {
  return this.y;
}