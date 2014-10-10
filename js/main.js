var myApp = angular.module("myApp", [])

.controller("myController", function($scope) {
  $scope.cellList = [
    {num: "c0", status: null},
    {num: "c1", status: null},
    {num: "c2", status: null},
    {num: "c3", status: null},
    {num: "c4", status: null},
    {num: "c5", status: null},
    {num: "c6", status: null},
    {num: "c7", status: null},
    {num: "c8", status: null},
  ];

  $scope.turnCounter = 0;

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

  $scope.checkWinner = function() {
    
    if (($scope.cellList[0].status == "x" && $scope.cellList[1].status == "x" && $scope.cellList[2].status == "x") || 
        ($scope.cellList[3].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[5].status == "x") || 
        ($scope.cellList[6].status == "x" && $scope.cellList[7].status == "x" && $scope.cellList[8].status == "x") || 
        ($scope.cellList[0].status == "x" && $scope.cellList[3].status == "x" && $scope.cellList[6].status == "x") ||
        ($scope.cellList[1].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[7].status == "x") ||
        ($scope.cellList[2].status == "x" && $scope.cellList[5].status == "x" && $scope.cellList[8].status == "x") ||
        ($scope.cellList[0].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[8].status == "x") ||
        ($scope.cellList[2].status == "x" && $scope.cellList[4].status == "x" && $scope.cellList[6].status == "x")) {
          
          // return something ;

    } else if (($scope.cellList[0].status == "y" && $scope.cellList[1].status == "y" && $scope.cellList[2].status == "y") || 
        ($scope.cellList[3].status == "y" && $scope.cellList[4].status == "y" && $scope.cellList[5].status == "y") || 
        ($scope.cellList[6].status == "y" && $scope.cellList[7].status == "y" && $scope.cellList[8].status == "y") || 
        ($scope.cellList[0].status == "y" && $scope.cellList[3].status == "y" && $scope.cellList[6].status == "y") ||
        ($scope.cellList[1].status == "y" && $scope.cellList[4].status == "y" && $scope.cellList[7].status == "y") ||
        ($scope.cellList[2].status == "y" && $scope.cellList[5].status == "y" && $scope.cellList[8].status == "y") ||
        ($scope.cellList[0].status == "y" && $scope.cellList[4].status == "y" && $scope.cellList[8].status == "y") ||
        ($scope.cellList[2].status == "y" && $scope.cellList[4].status == "y" && $scope.cellList[6].status == "y")) {
          
          // return something ;


    } else {
        // return something ;
    };
  };
});