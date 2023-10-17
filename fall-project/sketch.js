function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(0);
  print(mouseX, mouseY)
  noStroke()
  //The thing on top of the pumpkin
  fill(0, 100, 0)
  rect(187, 70, 25, 80)
  //The text
  fill(0, 255, 0, 120)
  text("Happy(Haunted) Halloween!", 140, 390)
  //The pumpkin's body
  i = 0
  x = 100
  fill(255, 100, 0)
  noStroke()
  while (i < 6){
    ellipse(x, 220, 70, 200)
    x+=40
    i+=1
  }
  //The eyes of the Jack'O Lantern
  fill(0)
  triangle(132, 193, 153, 165, 174, 192)
  triangle(210, 193, 231, 165, 252, 192)
  //The mouth of the Jack'O Lantern
  
  triangle(119, 277, 149, 216, 179, 277)
  triangle(149, 277, 179, 216, 209, 277)
  triangle(179, 277, 209, 216, 239, 277)
  triangle(209, 277, 239, 216, 269, 277)
  //The scar on the Jack'O Lantern
  stroke(255, 0, 0)
  strokeWeight(3)
  line(263, 167, 310, 192)
  line(279, 160, 266, 183)
  line(291, 164, 276, 189)
  line(304, 169, 288, 195)
  //The eyeballs
  noFill()
  circle(232, 180, 10)
  circle(153, 180, 10)
}
