function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
   
  if(keyIsPressed){
    if(key=="2"){
      print("you clicked on box 2");
    }
  } 
  fill(255);
  if(mouseX>0 && mouseX<200 && mouseY>0 && mouseY<100){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 1");
    }
  }


  rect(0,0,200,100);
  fill(255);
  if(mouseX>200 && mouseX<400 && mouseY>0 && mouseY<100){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 2");
    }
  }
  rect(200,0,200,100);
  fill(255)
  if(mouseX>400 && mouseX<600 && mouseY>0 && mouseY<100){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 3");
    }
  }
  rect(400,0,200,100);
  fill(255);
  if(mouseX>0 && mouseX<200 && mouseY>100 && mouseY<200){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 4");
    }
  }
  rect(0,100,200,100);
  fill(255)
  if(mouseX>0 && mouseX<200 && mouseY>200 && mouseY<300){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 7");
    }
  }
  rect(0,200,200,100);
  fill(255)
  if(mouseX>0 && mouseX<200 && mouseY>300 && mouseY<400){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 10");
    }
  }
  rect(0,300,200,100);
  fill(255)
  if(mouseX>200 && mouseX<400 && mouseY>100 && mouseY<200){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 5");
    }
  }
  rect(200,100,200,100);
  fill(255)
  if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<300){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 8");
    }
  }
  rect(200,200,200,100);
  fill(255)
  if(mouseX>200 && mouseX<400 && mouseY>300 && mouseY<400){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 11");
    }
  }
  rect(200,300,200,100);
  fill(255)
  if(mouseX>400 && mouseX<600 && mouseY>100 && mouseY<200){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 6");
    }
  }
  rect(400,100,200,100);
  fill(255)
  if(mouseX>400 && mouseX<600 && mouseY>200 && mouseY<300){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 9");
    }
  }
  rect(400,200,200,100);
  fill(255)
  if(mouseX>400 && mouseX<600 && mouseY>300 && mouseY<400){
    fill("pink");
    if(mouseIsPressed){
      print("you clicked on box 12");
    }
  }
  rect(400,300,200,100);
  fill(255)
  textAlign(CENTER)
  fill(0)
  text("box 1", 100,50);
  text("box 2", 300,50);
  text("box 3", 500,50);
  text("box 4", 100, 150)
  text("box 5", 300, 150)
  text("box 6", 500, 150)
  text("box 7", 100, 250)
  text("box 8", 300, 250)
  text("box 9", 500, 250)
  text("box 10", 100, 350)
  text("box 11", 300, 350)
  text("box 12", 500, 350)
  if(keyIsPressed){
    if(key=="1"){
      print("you clicked on box 1");
    }
  }
  if(keyIsPressed){
    if(key=="2"){
      print("you clicked on box 2");
    }
  }
  if(keyIsPressed){
    if(key=="3"){
      print("you clicked on box 3");
    }
  }
  if(keyIsPressed){
    if(key=="4"){
      print("you clicked on box 4");
    }
  }
  if(keyIsPressed){
    if(key=="5"){
      print("you clicked on box 5");
    }
  }
  if(keyIsPressed){
    if(key=="6"){
      print("you clicked on box 6");
    }
  }
  if(keyIsPressed){
    if(key=="7"){
      print("you clicked on box 7");
    }
  }
  if(keyIsPressed){
    if(key=="8"){
      print("you clicked on box 8");
    }
  }
  if(keyIsPressed){
    if(key=="9"){
      print("you clicked on box 9");
    }
  }
  if(keyIsPressed){
    if(key=="0"){
      print("you clicked on box 10");
    }
  }
  if(keyIsPressed){
    if(key=="a"){
      print("you clicked on box 11");
    }
  }
  if(keyIsPressed){
    if(key=="b"){
      print("you clicked on box 12");
    }
  }
}
