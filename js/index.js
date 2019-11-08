$(document).ready(function() {

  var playerArr = [];
  var computerArr = [];
  var used = [];
  var playerSymbol;
  var computerSymbol;
  var i = 0;
  var j = 0;
  var win = false;
  var winArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  $(".x").click(function() { // player goes first
    $(".cover").hide('slide', {
      direction: 'down'
    }, 1000);
    $(".board").css('visibility', "visible");
    computerSymbol = "O";
    playerSymbol = "X";
  });

  $(".o").click(function() { // computer goes first
    $(".cover").hide('slide', {
      direction: 'down'
    }, 1000);
    $(".board").css('visibility', "visible");
    computerSymbol = "X";
    playerSymbol = "O";
    computerTurn();
  });

  $(".resetPage").click(function() {
    $(".cover").show('slide', {
      direction: 'down'
    }, 1000);
    $(".board").css('visibility', "hidden");
    $(".box").removeClass("not-active");
    $(".box").text("");
    $(".result").css('display', "none");
    playerArr = [];
    computerArr = [];
    used = [];
    i = 0;
  });

  function checkWin(arr) {
    for (j = 0; j < winArr.length; j++) {
      win = arr.filter(function(elem) {
        return winArr[j].indexOf(elem) > -1;
      }).length == 3;

      if (win) {
        return true;
      }
    }
    console.log(arr);
    return false;
  }

  function markTile(symbol, index) {
    $(".box" + index).text(symbol);
    used.push(index);
    computerArr.push(index);
    $(".box" + index).addClass("not-active");
  }

  function computerTurn() {
    if (checkWin(playerArr)) {
      $(".box").addClass("not-active");
      $(".result").show('slide', {
        direction: 'up'
      }, 1000);
      $("#victor").text("You win!");
      return;
    }

    markTile(computerSymbol, randomSquare(used));

    if (checkWin(computerArr)) {
      $(".box").addClass("not-active");
      $(".result").show('slide', {
        direction: 'up'
      }, 1000);
      $("#victor").text("Computer wins!");
    } else if (used.length == 9) {
      $(".box").addClass("not-active");
      $(".result").show('slide', {
        direction: 'up'
      }, 1000);
      $("#victor").text("Draw!");
    }
  }

  $(".box1").click(function() { //1    
    $(".box1").text(playerSymbol);
    $(".box1").addClass("not-active");
    used.push(1);
    playerArr.push(1);

    computerTurn();

  });

  $(".box2").click(function() { //1    
    $(".box2").text(playerSymbol);
    $(".box2").addClass("not-active");
    used.push(2);
    playerArr.push(2);

    computerTurn();
  });

  $(".box3").click(function() { //1    
    $(".box3").text(playerSymbol);
    $(".box3").addClass("not-active");
    used.push(3);
    playerArr.push(3);

    computerTurn();
  });

  $(".box4").click(function() { //1    
    $(".box4").text(playerSymbol);
    $(".box4").addClass("not-active");
    used.push(4);
    playerArr.push(4);

    computerTurn();
  });

  $(".box5").click(function() { //1    
    $(".box5").text(playerSymbol);
    $(".box5").addClass("not-active");
    used.push(5);
    playerArr.push(5);

    computerTurn();
  });

  $(".box6").click(function() { //1    
    $(".box6").text(playerSymbol);
    $(".box6").addClass("not-active");
    used.push(6);
    playerArr.push(6);

    computerTurn();
  });

  $(".box7").click(function() { //1    
    $(".box7").text(playerSymbol);
    $(".box7").addClass("not-active");
    used.push(7);
    playerArr.push(7);

    computerTurn();
  });

  $(".box8").click(function() { //1    
    $(".box8").text(playerSymbol);
    $(".box8").addClass("not-active");
    used.push(8);
    playerArr.push(8);

    computerTurn();

  });

  $(".box9").click(function() { //1    
    $(".box9").text(playerSymbol);
    $(".box9").addClass("not-active");
    used.push(9);
    playerArr.push(9);

    computerTurn();
  });

  function emptySquares(board) {
    let arr = [1,2,3,4,5,6,7,8,9];

    const avail = arr.filter(num => board.indexOf(num) === -1);

    return avail;
  }

  function randomSquare(board) {
    const availSpots = emptySquares(board);
    return availSpots[Math.floor(Math.random() * board.length)];
  }

  function minmax(board) {

    const availSpots = emptySquares(board);

    if (checkWin(playerArr))
      return {score: -10};
    else if (checkWin(computerArr))
      return {score: 10};
    else if (availSpots.length === 0) {
      return {score: 0};
    }

    let moves = [];

    for (let i = 0; i < availSpots.length; i++) {
      let move = {};
      move.index = board[availSpots[i]];
    }
  }

});