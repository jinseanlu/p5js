//my little brother told me to make this...
function setup() {
  createCanvas(400, 400);
  
}
function preload(){
  img = loadImage("Cat.png")
}

function draw() {
  background(255);
  image(img, 164, 155, 76, 57)
  noFill()
  strokeWeight(4)
  circle(200, 200, 100)
  fill(0)
  textAlign(CENTER, CENTER)
  textSize(30)
  text("IPC", 200, 230)
  noFill()
  line(238, 169, 310, 169)
  line(310, 169, 294, 219)
  line(294, 219, 250, 219)
  
  line(90, 169, 160, 169)
  line(90, 169, 110, 219)
  line(150, 219, 110,219)
  
  line(100, 186, 150, 186)
  line(105, 204, 150, 204)
  
  line(250, 186, 302.5, 186)
  line(250, 204, 299, 204)
  
}
