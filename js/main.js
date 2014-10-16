var myApp = angular.module("MyApp", [])

.controller("MyController", function($scope) {
  // create empty game board.
  $scope.cellList = [
    {num: 1, status: null},
    {num: 2, status: null},
    {num: 3, status: null},
    {num: 4, status: null},
    {num: 5, status: null},
    {num: 6, status: null},
    {num: 7, status: null},
    {num: 8, status: null},
    {num: 9, status: null}
  ];

  // create initial setting for new game.
  $scope.turnCounter = 0;
  $scope.xWin = false;
  $scope.oWin = false;
  $scope.gameEnd = false;

  // set all possible winning combos.
  $scope.winCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  // first user to click any cell is player x/doge. users are not permitted to choose already selected cells.
  $scope.playerPicks = function(clickedCell) {
    if (clickedCell.status != null) {
      return;
    } else if ($scope.turnCounter%2 == 0) {
      clickedCell.status = "x";
    } else {
      clickedCell.status = "o";
    }$scope.turnCounter++;

    // logs in the console whose turn and status of cell.
    console.log("clicked " + clickedCell.num + ". player " + clickedCell.status + " in this cell. turn number: " + $scope.turnCounter);

    $scope.checkWinner($scope.cellList);
  };

  // two for loops interate through each possible combo in the winCombos array and then through each value of a single win combo
  // xcount and ocount created to keep track of # of how many x's or o's match within a possible winning combo
  // two if statements check if position of the game board has a status of x or o, if there is a match then add to the xcount
  // game ends if the turn counter hits 9 and gameEnd is still false
  $scope.checkWinner = function(list) {
    for ($scope.i = 0; $scope.i < $scope.winCombos.length; $scope.i++) {
    
    $scope.xcount = 0;
    $scope.ocount = 0;
      
      for ($scope.j = 0; $scope.j < 3; $scope.j++) {
        if (list[$scope.winCombos[$scope.i][$scope.j]-1].status == "x") {
          $scope.xcount++;
          if ($scope.xcount == 3) {
            $scope.xWin = true;
          }
        } if (list[$scope.winCombos[$scope.i][$scope.j]-1].status == "o") {
            $scope.ocount++;
            if ($scope.ocount == 3) {
              $scope.oWin = true;
            }
        } if ($scope.turnCounter == 9 && $scope.gameEnd == false) {
          $scope.gameEnd = true;
          alert("boohoo");
        } 
      }
    }
  };


  // resets game board to initial settings
  $scope.newGame = function () {
    $scope.cellList = [
      {num: 1, status: null},
      {num: 2, status: null},
      {num: 3, status: null},
      {num: 4, status: null},
      {num: 5, status: null},
      {num: 6, status: null},
      {num: 7, status: null},
      {num: 8, status: null},
      {num: 9, status: null}
    ];

    $scope.turnCounter = 0;
    $scope.xWin = false;
    $scope.oWin = false;
    $scope.gameEnd = false;
  };
});