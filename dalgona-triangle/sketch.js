let angle = 0
let hasWon = false
let hasDied = false
let fail = 0
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  
}

function draw() {
  background(220);
  if(hasWon == false && hasDied == false && fail < 2){
    fill(204, 204, 0)
    circle(200, 200, 50)
    fill(255, 0, 0)
    triangle(200, 180, 182.5, 210, 218.5, 210)
    push()
    noFill()
    translate(width/2, height/2)
    rotate(angle)
    spinnyTriangle(0, 0, 20, 0)
    angle++
  
    pop()
     
    }
  
  if(fail >= 2){
    hasDied = true
  }
     
  if(hasWon == true){
    text("u win", 50, 50)
  }
  else if(hasDied == true){
    text("u died get rekt", 50, 50)
    fill(255)
    rect(100, 100, 200)
    fill(0)
    textAlign(CENTER, CENTER)
    text("RESTART", 200, 200)
  }
}
//I give credit to amaruwong and u can find his projects on editor.p5js.org/amaruwong/sketches
function spinnyTriangle(centerx, centery, w, a) {
  
  triangle(cos(a)*w+centerx, sin(a)*w+centery,
           cos(a+120)*w+centerx, sin(a+120)*w+centery,
           cos(a+240)*w+centerx, sin(a+240)*w+centery)
}
function mousePressed(){
  if(angle % 120 >= 25 && angle % 120 <= 35 && hasDied == false && hasWon == false){
    hasWon = true
  }
  else if(hasDied == false){
    fail += 1
  }
  if(hasDied == true && mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300){
    hasDied = false
    hasWon = false
    fail = 0
  }
}
