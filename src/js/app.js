(function() {

  var defaults = {
    filler_class: 'filler'    
  };

  function Sudoku(element, options) {
    settings = $.extend({}, defaults, options);
    this.start();
  }

  Sudoku.prototype.start = function() {
    var uicontent = new UI(); 
    var gameBoard = createGameBoard();
    play();

    //User Interface
    uicontent.getSolution().click(function() {
        var endSolution = false;
        var i = 0;
        while (gameBoard.isUnsolved() || endSolution) {
          gameBoard.removeFromSolution();
          updateGame(gameBoard);
          i++;
          if (i>10) {
            endSolution = true;
          }
        }
    });
    
    function play() {
      gameBoard.addClass();
      updateGame(gameBoard);
    }

    function createGameBoard() {
      var boxes = [];
      var solution = [];
      
      // Difficulty: Moderate
      var newBoard = 
          [
          [0,1,2,4,8,7,0,0,0],
          [0,0,0,0,0,0,4,8,0],
          [4,8,3,0,0,0,5,2,0],
          [7,0,9,0,0,0,0,4,8],
          [0,0,0,0,3,0,0,0,2],
          [8,2,0,0,0,4,0,9,6],
          [0,0,6,0,0,0,8,0,3], 
          [9,0,0,0,0,5,0,1,0],
          [0,4,0,0,0,8,9,0,5]
          ]

      //Difficulty: Hard
      // var newBoard = 
      //     [
      //     [0,7,0,2,0,0,0,1,0],
      //     [0,8,2,1,0,0,0,0,0],
      //     [0,9,0,6,0,0,0,8,4],
      //     [0,0,9,0,6,0,0,0,0],
      //     [4,0,7,5,0,0,0,0,0],
      //     [5,0,0,0,0,0,7,2,0],
      //     [9,0,0,4,7,0,3,0,0], 
      //     [0,0,0,0,0,0,8,0,1],
      //     [0,0,0,0,8,2,0,0,0]
      //     ]

      //Place all values 1-9 as possible solutions in boxes that do not have a solution    
      for (var i = 0; i<9; i++) {
        for (var j = 0; j<9; j++) {
          solution = [1,2,3,4,5,6,7,8,9];
          if (newBoard[i][j] != 0) {
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

    function solve() {
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
      gameBoard.removeFromSolution();
      updateGame(gameBoard);
    }
  }

  $.fn.sudoku = function(options) {
    return this.each(function() {
      new Sudoku(this, options);
    })
  };
})();