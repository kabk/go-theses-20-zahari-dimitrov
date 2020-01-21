var maxX = 500;
var maxY = 500;
var pop = 40000;
var gridSize = 5;
var size = 4;
var pieces = makeArray(maxY, maxX);
var lastGeneration = null;

function makeArray(d1, d2) {
  var arr = [];
  for (i = 0; i < d2; i++) {
    arr.push(new Array(d1));
  }
  return arr;
}
lastGeneration = pieces;
BuildGame();

function BuildGame() {
  //build
  for (var i = 0; i < pop; i++) {
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    pieces[x][y] = 1;
  }
  //play
  PlayGame();
}

function PlayGame() {
  setTimeout(function() {
    //logic
    //duplicate array (not a reference which causes issues)
    lastGeneration =  JSON.parse(JSON.stringify(pieces));
    for (var x = 0; x < maxX; x++) {
      for (var y = 0; y < maxY; y++) {
        CheckNeighbours(x, y);
      }
    }
    //Draw
    Draw();
    //Next round
    PlayGame();
  }, 100);
}

//returns true to live
function CheckNeighbours(x, y) {
  var count = 0;

  var startPosX = (x - 1 < 0) ? x : x - 1;
  var startPosY = (y - 1 < 0) ? y : y - 1;
  var endPosX = (x + 1 >= maxX) ? x : x + 1;
  var endPosY = (y + 1 >= maxY) ? y : y + 1;

  for (var xRange = startPosX; xRange <= endPosX; xRange++) {
    for (var yRange = startPosY; yRange <= endPosY; yRange++) {
      if (!(xRange == x && yRange == y)) {
        //console.log("X: " + xRange + " Y: " + yRange);
        lastGeneration[xRange][yRange] === 1 ? count++ : count += 0;

      }
    }
  }

  if (count === 3) {
    //console.log("BORN!");
    pieces[x][y] = 1;
  } else if (count == 2 && pieces[x][y] === 1) {
    //  console.log("LIVE");
  } else {
    pieces[x][y] = 0;
    //  console.log("DIE!");
  }
}

function Draw() {

  //draw canvas
  var c = document.getElementById("gol");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  
  for (var x = 0; x < maxX; x++) {
    for (var y = 0; y < maxY; y++) {
      if (pieces[x][y] === 1) {
        if(lastGeneration[x][y] === 1){
          ctx.fillStyle = "#000000";
        }
        ctx.fillRect((x * gridSize) + 1, (y * gridSize) + 1, size, size);
      }
      ctx.fillStyle = "#000000";
    }
  }
}
