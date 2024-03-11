//Enjoy the amazing project























































let x = ["You've been trolled", "You've been trolled", "Yes, you've probably been told", "Don't reply to this guy", "He's just trying to get a rise", "Out of you, yes, it's true", "You respond and that's his cue", "To start trouble on the double", "While he strokes his manly stubble", "You've been trolled", "You've been trolled", "You should probably just fold", "When the only winning move is not to play", "And yet you keep on trying, mindlessly replying", "You've been trolled", "You've been trolled", "Have a nice day" ]
let sstage = 0
function preload(){
  img = loadImage("troll.png")
}
function setup() {
  createCanvas(400, 400);
  
  setInterval(y, 2000)
}

function draw() {
  
  background(220);
  image(img, 0, 0, 400, 400)
  textAlign(CENTER, CENTER)
  fill(0, 255, 0)
  text(x[sstage], 200, 200)
}
function y(){
  sstage++
  if(sstage > 16){
    sstage = 0
  }
}
