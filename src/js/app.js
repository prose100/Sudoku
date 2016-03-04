(function() {

  var defaults = {
    filler_class: 'filler'    
  };

  function Sudoku(element, options) {
    settings = $.extend({}, defaults, options);
    this.start();
  }

  Sudoku.prototype.start = function() {
    play();
  }

    function play() {
      gameBoard = createGameBoard();
      console.log(gameBoard);
    }

    function createGameBoard() {
      var boxes = [];
      var solution = [];
       //Temporary gameBoard Input
      var newBoard = 
          [
          [1,2,,4,5,6,7,,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9],
          [1,2,3,4,5,6,7,8,9]
          ]

      for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
          solution = [1,2,3,4,5,6,7,8,9];
          if (newBoard[i][j] != null) {
            solution = newBoard[i][j];
          }
          boxes.push(new Box(i, j, solution));
        }
      }
      return new Board(boxes);
    }

  $.fn.sudoku = function(options) {
    return this.each(function() {
      new Sudoku(this, options);
    })
  };
})();