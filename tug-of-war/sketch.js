let x = 300
let enemyx = 100
let hasWon = false
let hasDied = false
let playernum
let winx = 800
function setup() {
  createCanvas(800, 800);
  playernum = round(random(1, 456))
}

function draw() {
  background(220);
  if(x < winx && hasDied == false && hasWon == false){
  circle(enemyx, 200, 50)
  circle(x, 200, 50)
  line(enemyx, 200, x, 200)
  x--
  enemyx--
  
  }
  if(enemyx < 50){
    hasDied = true
  }
  if(x > winx){
    hasWon = true
  }
  if(hasWon == true){
    text("u win", 250, 250)
  }
  if(hasDied == true){
    text("Player " + str(playernum) + " Eliminated", 50, 50)
    rect(100, 100, 200)
    textAlign(CENTER, CENTER)
    text("RESTART", 200, 200)
  }
}
function mousePressed(){
  if(x < winx && hasWon == false && hasDied == false){
    x+=8
    enemyx+=8
  }
  if(hasDied == true && mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300){
    hasDied = false
    hasWon = false
    x = 300
    enemyx = 100
    }
}
