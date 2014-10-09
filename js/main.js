var myApp = angular.module("myApp", [])

.controller("myController", function($scope) {

  console.log("i'm alive");

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
    console.log("clicked " + clickedCell.num + ". it's " + $scope.turnCounter + "'s turn");

    if (clickedCell.status != null) {
      return;
    } else if ($scope.turnCounter%2 == 0) {
      clickedCell.status = "x";
    } else {
      clickedCell.status = "o";
    }$scope.turnCounter++;
  };

});