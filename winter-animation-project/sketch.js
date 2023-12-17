//height of snow
let y = 0
//maximum number of snow
let maxsnow = 500
//stage of snowman/snowduck
let snowmanstage = 0
//sans glowing eye 0 = yellow, 1 = blue
let flash = 0
//the size of the snowman
let a, b, c, d, e, f, g
//the cloud
let cx1 = 0
let cx2 = 20
let cx3 = 40
let cspeed = 10
//sun color pulse
let sunr = 255
let sung = 255
let suncds = 5
//background changes with sun
let bg = 255
let bb = 255
let bs = 5
//the horizontal position of the text
let textx = 0
function setup() {
  createCanvas(400, 400);
  frameRate(10)
  //changes snowman phase
  setInterval(snowman, 1000)
  
}

function draw() {
  background(0, bg, bb);
  bg += bs
  bb += bs
  if(bg > 255){
    bs = -5
  }
  if(bg < 0){
    bs = 5
  }
  textSize(15)
  fill(255)
  text("Merry Christmas!\nCan you find the Christmas egg?", textx, 20)
  textx +=5
  if(textx > 400){
    textx = 0
  }
  //uwu dayy jonseana 
  
  noStroke()
  fill(255)
  //makes snow fall
  for (let i = 0; i < maxsnow; i++){
    ellipse(random(400), y + random(400), random(4, 10))
  }
  y +=20
  if(y > 0){
    y = 0
  }
  rect(0, 300, 400, 100)
  strokeWeight(1)
  stroke(0)
  //cloud
  fill(255)
  noStroke()
  ellipse(cx1, 60, 50, 25)
  ellipse(cx2, 50, 50, 25)
  ellipse(cx3, 60, 50, 25)
  
  cx1 += cspeed
  cx2 += cspeed
  cx3 += cspeed
  if(cx3 > 400){
    cspeed = -10
  }
  if(cx1 < 0){
    cspeed = 10
  }
  //sun
  fill(sunr, sung, 0)
  ellipse(375, 25, 50)
  sunr += suncds
  sung += suncds
  if(sunr > 255 && sung > 255){
    suncds = -5
  }
  if(sunr < 0 && sung < 0){
    suncds = 5
  }
  
  //house
  stroke(1)
  fill(255)
  rect(250, 200, 100)
  
  triangle(250, 200, 300, 150, 350, 200)
  
  
  rect(287, 250, 25, 50)
  ellipse(306, 274, 5)
  strokeWeight(1)
  stroke(0)
  noFill()
  windoww(270, 212.5, 15)
  windoww(315, 212.5, 15)
  //snowman/snowduck drawing
  noStroke()
  fill(255)
  ellipse(100, 250, a)
  ellipse(100, 190, b)
  ellipse(100, 140, c)
  fill(255, 100, 0)
  ellipse(120, 137, d, e)
  fill(0)
  ellipse(100, 125, f)
  ellipse(118, 125, g)
  //easter egg of sugoma eht snas 
  if(mouseX > 250 && mouseX < 350 && mouseY < 200 && mouseY > 150){
    fill(255, 0, 0)
    square(287, 170, 30, 30, 30, 0, 0)
    fill(0, 100, 255)
    rect(306, 180, 20, 10, 40)
    fill(255, 0, 0)
    rect(280, 182, 10, 17.5, 10, 0, 0, 0)
    noFill()
    strokeWeight(3)
    if (flash == 0) {
    flash +=1
    stroke(255, 255, 0)
    }
    else{
      flash -=1
      stroke(0, 255, 255)
    }
    ellipse(316, 185, 5)
  }
  
  
}
//makes snowman phases
function snowman(){
  //i apologize that the snowman looks like a duck
  snowmanstage++
  if(snowmanstage == 1){
    a = 100
  }
  else if(snowmanstage == 2){
    a = 100
    b = 80
  }
  else if(snowmanstage == 3){
    a = 100
    b = 80
    c = 60
  }
  else if(snowmanstage == 4){
    a = 100
    b = 80
    c = 60
    d = 30
    e = 15
  }
  else if(snowmanstage == 5){
    a = 100
    b = 80
    c = 60
    d = 30
    e = 15
    f = 5
  }
  else if(snowmanstage == 6){
    a = 100
    b = 80
    c = 60
    d = 30
    e = 15
    f = 5
    g = 5
  }
  else{
    
  }
  
    
  
  if(snowmanstage>6){
    snowmanstage = 0
    a = 0
    b = 0
    c = 0
    d = 0
    e = 0
    f = 0
    g = 0
  }
}
//draws window, i renamed it to windoww because window is a reserved word, i think
function windoww(wx, wy, ws){
  square(wx, wy, ws)
  line(wx + ws/2, wy, wx + ws/2, wy + ws)
  line(wx, wy + ws/2, wx + ws, wy + ws/2)
  
}
//secret link :D
function mousePressed(){
  //dawgsong
  if(mouseX > 250 && mouseX < 350 && mouseY < 200 && mouseY > 150){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
}
