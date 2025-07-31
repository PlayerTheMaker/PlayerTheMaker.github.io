var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var player = [100,100,0,0,0,0]
var leftIn = false
var rightIn = false
var downIn = false
var upIn = false

var input = 0

var x = 0
var y = 1
var velx = 2
var vely = 3
var olx = 4
var oly = 5

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightIn = true;
    if (input == 7){
      input = 8
    }
    else if (input == 5){
      input = 6
    }
  }
  if(e.key == "Left" || e.key == "ArrowLeft") {
    leftIn = true;
    if (input == 6){
      input = 7
    }
    if (input == 4){
      input = 5
    }
  }
  if(e.key == "Down" || e.key == "ArrowDown") {
    downIn = true;
    if (input == 3){
      input = 4
    }
    if (input == 2){
      input = 3
    }
  }
  if(e.key == "Up" || e.key == "ArrowUp") {
    upIn = true;
    if (input == 1){
      input = 2
    }
    if (input == 0){
      input = 1
    }
  }

  if (e.key == "b" && input == 8){
    input=9
  }
  if (e.key == "a" && input == 9){
    input=10
  }
  
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightIn = false;
  }
  if(e.key == "Left" || e.key == "ArrowLeft") {
    leftIn = false;
  }
  if(e.key == "Down" || e.key == "ArrowDown") {
    downIn = false;
  }
  if(e.key == "Up" || e.key == "ArrowUp") {
    upIn = false;
  }
  
}

function Player() {

  player[olx] =  player[x]
  player[oly] =  player[y]

  if (rightIn == true){
    player[2] += 2
  }
  if (leftIn == true){
    player[2] -= 2
  }
  if (downIn == true) {
    player[3] += 2
  }
  if (upIn == true) {
    player[3] -= 2
  }

  player[0] += player[2]
  player[1] += player[3]

  if (player[x]<0){
    player[x] = 0
    player[velx] *= -1
  }

  if (player[x] > canvas.width){
    player[x] = canvas.width
    player[velx] *= -1
  }

  if (player[y]<0){
    player[y] = 0
    player[vely] *= -1
  }

  if (player[y] > canvas.height){
    player[y] = canvas.height
    player[vely] *= -1
  }
    
  player[2] /= 1.1
  player[3] /= 1.1

  ctx.beginPath();
  ctx.arc(player[0], player[1], 10, 0, Math.PI*2);
  if (input < 10){
    ctx.fillStyle = "#0095DD";
  }else{
    ctx.fillStyle = "#FFC83C"
    document.getElementById("konami").innerHTML = "There isn't much of a secret here...........yet..............................";
  }
  ctx.fill();
  ctx.closePath();

  var loop = 0
  
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Player();
}

setInterval(draw, 40);