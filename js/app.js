var othello = angular.module('othello', []);

othello.factory('othelloService', [function() {
  var _board = new Array(8).map(function(array) {
    return new Array(8)
  });

  var _setPiece = function(x,y, color) {
    _board[y][x] = color;
  };

  var checkSequence = function(x, y, color) {
    _checkRow(x,y, color);
    _checkColumn(x,y, color);
    _checkDiagonal(x,y, color);
  };

  var _checkRow = function(x, y, color) {
    var output = { rowFoward: [], rowBackward: [] };
    for (var i = x + 1; i < _board[y].length; i++) {
      if (board[y][i].color === color) {
        output.rowFoward.push(board[y][i])
      } else if (i === _board[y].length - 1) {
        output.rowFoward = [];
      } else {
        break;
      }
    }
    for (var j = x - 1; j >= 0; j--) {
      if (board[y][j].color === color) {
        output.rowBackward.push(board[y][j])
      } else if (j === 0) {
        output.rowBackward = [];
      } else {
        break;
      }
    }
    return output;
  }

}]);

othello.controller('OthelloCtrl', ['$scope', function($scope) {

}]);
