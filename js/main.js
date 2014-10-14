var myApp = angular.module("MyApp", [])

.controller("MyController", function($scope) {
  $scope.cellList = [
    {num: "c0", status: null},
    {num: "c1", status: null},
    {num: "c2", status: null},
    {num: "c3", status: null},
    {num: "c4", status: null},
    {num: "c5", status: null},
    {num: "c6", status: null},
    {num: "c7", status: null},
    {num: "c8", status: null}
  ];

  $scope.turnCounter = 0;
  $scope.xWin = false;
  $scope.oWin = false;

// Player X picks any cell to start
  $scope.playerPicks = function(clickedCell) {
    if (clickedCell.status != null) {
      return;
    } else if ($scope.turnCounter%2 == 0) {
      clickedCell.status = "x";
    } else {
      clickedCell.status = "o";
    }$scope.turnCounter++;

    console.log("clicked " + clickedCell.num + ". player " + clickedCell.status + " in this cell. it's " + $scope.turnCounter + "'s turn");
  };

// Checks for winner based on possible combinations. xWin or yWin changes from false to true depending on who wins.
  $scope.checkWinner = function() {
    
    if (($scope.cellList[0].status == "x" && $scope.cellList[1].status == "x" && $scope.cellList[2].status == "x") || 
        ($scope.cellList[3].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[5].status == "x") || 
        ($scope.cellList[6].status == "x" && $scope.cellList[7].status == "x" && $scope.cellList[8].status == "x") || 
        ($scope.cellList[0].status == "x" && $scope.cellList[3].status == "x" && $scope.cellList[6].status == "x") ||
        ($scope.cellList[1].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[7].status == "x") ||
        ($scope.cellList[2].status == "x" && $scope.cellList[5].status == "x" && $scope.cellList[8].status == "x") ||
        ($scope.cellList[0].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[8].status == "x") ||
        ($scope.cellList[2].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[6].status == "x")) {
          
        $scope.xWin = true;
        $scope.winner();

    } else if (($scope.cellList[0].status == "o" && $scope.cellList[1].status == "o" && $scope.cellList[2].status == "o") || 
        ($scope.cellList[3].status == "o" && $scope.cellList[4].status == "o" && $scope.cellList[5].status == "o") || 
        ($scope.cellList[6].status == "o" && $scope.cellList[7].status == "o" && $scope.cellList[8].status == "o") || 
        ($scope.cellList[0].status == "o" && $scope.cellList[3].status == "o" && $scope.cellList[6].status == "o") ||
        ($scope.cellList[1].status == "o" && $scope.cellList[4].status == "o" && $scope.cellList[7].status == "o") ||
        ($scope.cellList[2].status == "o" && $scope.cellList[5].status == "o" && $scope.cellList[8].status == "o") ||
        ($scope.cellList[0].status == "o" && $scope.cellList[4].status == "o" && $scope.cellList[8].status == "o") ||
        ($scope.cellList[2].status == "o" && $scope.cellList[4].status == "o" && $scope.cellList[6].status == "o")) {
          
          $scope.oWin = true;
          $scope.winner();

    } else if ( ($scope.cellList[0].status == "o" || $scope.cellList[0].status == "x") && 
        ($scope.cellList[1].status == "o" || $scope.cellList[1].status == "x") &&
        ($scope.cellList[2].status == "o" || $scope.cellList[2].status == "x") &&
        ($scope.cellList[3].status == "o" || $scope.cellList[3].status == "x") &&
        ($scope.cellList[4].status == "o" || $scope.cellList[4].status == "x") &&
        ($scope.cellList[5].status == "o" || $scope.cellList[5].status == "x") &&
        ($scope.cellList[6].status == "o" || $scope.cellList[6].status == "x") && 
        ($scope.cellList[7].status == "o" || $scope.cellList[7].status == "x") &&
        ($scope.cellList[8].status == "o" || $scope.cellList[8].status == "x")) {
          alert("cat's game ");
    } else {
        return;
    };
  };

// winner function creates an alert to indicate who won
  $scope.winner = function () {
    if ($scope.xWin == true) {
      console.log("DOGE WINS!");

    } else {
      if ($scope.oWin == true) {
        console.log("DOLFIN WINS!");
      }
    }
  };

// play again button
  $scope.newGame = function () {
    $scope.cellList = [
      {num: "c0", status: null},
      {num: "c1", status: null},
      {num: "c2", status: null},
      {num: "c3", status: null},
      {num: "c4", status: null},
      {num: "c5", status: null},
      {num: "c6", status: null},
      {num: "c7", status: null},
      {num: "c8", status: null}
    ];

    $scope.turnCounter = 0;
    $scope.xWin = false;
    $scope.oWin = false;
  };
});