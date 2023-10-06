function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  var p = color(255, 229, 180) 
  var w = color(255, 255, 255)
  var g = color(128, 128, 128)
  fill(w)
  strokeWeight(7)
  rect(240, 260, 160, 140)
  fill(p)
  circle(150, 150, 100)
  line(150, 200, 150, 300)
  line(150, 300, 80, 400)
  line(150, 300, 200, 400)
  line(150, 230, 60, 230)
  line(150, 230, 240, 190)
  fill(255, 255, 0)
  rect(230, 90, 30, 100)
  fill(g)
  triangle(230, 90, 245, 60, 260, 90)
  fill(255, 0, 0)
  circle(132.5, 140, 15)
  circle(157.5, 140, 15)
  ellipse(145, 175, 40, 15)
  line(120, 110, 140, 60)
  line(140, 100, 160, 60)
  line(160, 100, 180, 60)
  line(180, 110, 200, 60)
}
