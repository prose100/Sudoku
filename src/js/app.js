(function() {
  'use strict'

  var defaults = {
    filler_class: 'filler'    
  };

  function Sudoku(element, options) {
    var settings = $.extend({}, defaults, options);
    this.start();
  }

  Sudoku.prototype.start = function() {
    play();
  }

    function play() {
      var gameBoard = createGameBoard();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();  
      updateGame(gameBoard);
    }

    function createGameBoard() {
      var boxes = [];
      var solution = [];
      
      //Temporary gameBoard Input
      var newBoard = 
          [
          [,1,2,4,8,7,,,],
          [,,,,,,4,8,],
          [4,8,3,,,,5,2,],
          [7,,9,,,,,4,8],
          [,,,,3,,,,2],
          [8,2,,,,4,,9,6],
          [,,6,,,,8,,3], 
          [9,,,,,5,,1,],
          [,4,,,,8,9,,5]
          ]

      //Place all values 1-9 as possible solutions in boxes that do not have a solution    
      for (var i = 0; i<9; i++) {
        for (var j = 0; j<9; j++) {
          solution = [1,2,3,4,5,6,7,8,9];
          if (newBoard[i][j] != null) {
            solution = newBoard[i][j];
          }
          boxes.push(new Box(i, j, solution));
        }
      }
      return new Board(boxes);
    }

    function updateGame(gameBoard) {
      gameBoard.draw();
    }

    // function getArrays(gameBoard, rowNumber, colNumber, secNumber) {
      
    // }

  $.fn.sudoku = function(options) {
    return this.each(function() {
      new Sudoku(this, options);
    })
  };
})();