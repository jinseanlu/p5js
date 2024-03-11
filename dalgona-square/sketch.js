let angle = 0
let fail = 0
let hasWon = false
let hasDied = false
let difficulty 
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  angleMode(DEGREES)
  difficulty = createSlider(0, 20)
}

function draw() {
  background(220);
  if(hasWon == false && hasDied == false && fail < 2){
  fill(204, 204, 0)
  stroke(5)
  circle(200, 200, 100)
  fill(255, 0, 0)
  square(200, 200, 50)
  
  translate(width/2, height/2)
  noFill()
  rotate(angle)
  square(0, 0, 50)
  angle +=1
    
    
  }
  if(fail >= 2){
    hasDied = true
  }
  if(hasWon == true){
    text("u win! It took you about " + fail + " fails to succeed", 50, 50)
  }
  if(hasDied == true){
    fill(0)
    text("U DIED", 50, 50)
    fill(255)
    square(200, 200, 200)
    push()
    fill(0)
    textAlign(CENTER, CENTER)
    text("RESTART", 200, 200)
    pop()
  }
}
function mousePressed(){
  if(angle % 90 <= difficulty.value()){
    hasWon = true
  }
  else if(hasDied == false){
    fail +=1
  }
  if(hasDied == true){
    if(mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300){
      hasDied = false
      hasWon = false
      fail = 0
    }
  }
}
