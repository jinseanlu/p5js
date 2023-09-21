function setup() {
  createCanvas(500, 500);
  console.log("I'm sub-20 in cubing")
  print("HEElo hit select is op")
  
}

function draw() {
  print(mouseX, mouseY)
  var c = color(255, 255, 0)
  var d = color(255, 229, 180)
  var g = color(0, 169, 0)
  var b = color(150, 75, 0)
  var bl = color(0, 0, 0)
  var w = color(255, 255, 255)
  background(0, 170, 255);
  
  fill(d)
  stroke(1)
  circle(200, 200, 68)
  line(200, 234, 200, 300)
  line(200, 267, 210, 250)
  line(200, 267, 190, 250)
  line(200, 300,190, 317)
  line(200, 300,210, 317)
  fill(c)
  stroke(1)
  circle(69, 69, 69)
  fill(g)
  stroke(1)
  rect(0, 317, 500, 45.75)
  fill(b)
  stroke(1)
  rect(0, 362.75, 500, 137.25)
  fill(bl)
  stroke(1)
  circle(185, 190.125, 5)
  circle(216, 190.125, 5)
  noFill()
  arc(200, 202, 40, 40, 0, PI);
  fill(w)
  noStroke()
  ellipse(230, 71, 100, 50)
  ellipse(306, 62.125, 100, 50)
  ellipse(255, 30.125, 100, 50)
}
