var myApp = angular.module("MyApp", ["firebase"])

.controller("MyController", function($scope, $firebase) {
  // links app to firebase db
  var gameRef = new Firebase("https://skj-doge-ttt.firebaseio.com/");
  $scope.remoteGameContainer = $firebase(gameRef);

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

  // method is triggered by value (this event is used to read a static snapshot of the contens of a given path).
  // reads the static snapshot of the ttt fb once and then runs a function that takes in that snapshot.
  // calling .val will return js intrepretation of that object in order for you to write conditional statements.

  gameRef.once("value", function(dataSnapshot){
    if(dataSnapshot.val().numPlayers == 2){
      $scope.eachPlayer = 0;
      $scope.goPlayerOne();
    } 
    else {
      $scope.eachPlayer = 1;
      $scope.goPlayerTwo();
    }
    $scope.gameContainer = {
      cellListArray: $scope.cellList,
      moveCounter: $scope.turnCounter,
      xWinner: $scope.xWin,
      oWinner: $scope.oWin,
      numPlayers: $scope.eachPlayer + 1
    };
    $scope.remoteGameContainer.$bind($scope, "gameContainer");
  });

  // ???
  $scope.$watch('gameContainer', function() {
    console.log('gameContainer changed!') ;
  });


  // first user to click any cell is player x/doge. users are not permitted to choose already selected cells.

  $scope.playerPicks = function(clickedCell) {
    if (clickedCell.status != null || $scope.eachPlayer != ($scope.gameContainer.moveCounter % 2)) {
      return;
    } else if ($scope.gameContainer.moveCounter%2 == 0 ) {
      clickedCell.status = "x";
    } else {
      clickedCell.status = "o";
    }$scope.gameContainer.moveCounter++;

    // logs in the console whose turn and status of cell.
    console.log("clicked " + clickedCell.num + ". player " + clickedCell.status + " in this cell. turn number: " + $scope.gameContainer.moveCounter);

    $scope.checkWinner($scope.gameContainer.cellListArray);
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
            $scope.gameContainer.xWinner = true;
          }
        } if (list[$scope.winCombos[$scope.i][$scope.j]-1].status == "o") {
            $scope.ocount++;
            if ($scope.ocount == 3) {
              $scope.gameContainer.oWinner = true;
            }
        } if ($scope.gameContainer.moveCounter == 9 && $scope.gameEnd == false) {
          $scope.gameEnd = true;
          $scope.sweetAlert();
        } 
      }
    }
  };

  // SweetAlerts to alert whose turn it is and cat's game.
  $scope.sweetAlert = function () {
    swal({
      title: "It's a tie!",   
      text: "Looks like you'll have to play again.",     
      confirmButtonText: "Cool"
    });
  };

  $scope.goPlayerOne = function () {
    swal({
      title: "Player 1",   
      text: "You get to go first!",
      imageUrl: "images/player1.png",     
      confirmButtonText: "Hotay"
    });
  };

  $scope.goPlayerTwo = function () {
    swal({
      title: "Player 2",   
      text: "Wait for Player 1 to make their move.",
      imageUrl: "images/player2.png",     
      confirmButtonText: "Hotay"
    });
  };

  // resets game board to initial settings
  $scope.newGame = function () {
    $scope.gameContainer.cellListArray = [
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

    $scope.gameContainer.moveCounter = 0;
    $scope.gameContainer.xWinner = false;
    $scope.gameContainer.oWinner = false;
    $scope.gameEnd = false;
  };
});