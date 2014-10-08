var count = 0;
var gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
// c0: [0][0]  c1: [0][1]  c2: [0][2]
// c3: [1][0]  c4: [1][1]  c5: [1][2]
// c6: [2][0]  c7: [2][1]  c8: [2][2]

window.onload = function startGame(){
  for(var cellNum = 0; cellNum < 9; cellNum++){
    var currentCell = document.getElementById("c"+cellNum);
    
    currentCell.addEventListener("click",function(){
      
      if (count%2 == 0) {
        // check if cell is empty.
        // check if cell is part of winning combo

        this.style.backgroundImage = 'url(http://growld.com/wp-content/uploads/2014/02/pixel-doge.gif)';
        this.style.backgroundSize = '200px 200px';
        this.style.backgroundRepeat = 'no-repeat';
        // want to take the clicked cell and replace null with X in corresponding spot of the gameBoard array
        // make function that takes currentCell, if currentCell parameter matches cell string then push X to that position within the gameBoard array.
        
      } else {
        this.style.backgroundImage = 'url(http://2.bp.blogspot.com/-0lY_yVIigy8/UbDUfZkIT8I/AAAAAAAAMKo/BWwuuJHfCLk/s1600/shaking-dolphin.gif)';
        this.style.backgroundSize = '200px 200px';
        this.style.backgroundRepeat = 'no-repeat';
      } count++;
    });
  }
};

