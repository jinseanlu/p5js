//I don't even want to explain 500 lines of code :|
let ingame = false;
let playerspeed = 5;
let playerx = 200;
let playery = 200;
let level = 1;
let start3 = false;
let c1fq3d, c2fq3d, c3fq3d, c4fq3d, c5fq3d;
let gotkey = false;
let tframe = 0;
let timer = 10;
let timerq4 = 3;
let tq4f = 0;
let q4score = 0;
let dotx, doty;
let squarex, squarey, squarex2, squarey2;
let towenemyx = 50;
let towenemyy = 200;
let fail = -1;
let enemy7x = 0;
let enemy7y = 0;
let e7spedx = 5;
let e7spedy = 5;
let enemy7x2 = 0;
let enemy7y2 = 0;
let e7spedx2 = 5;
let e7spedy2 = 5;
let survive7 = 60;
let sframe = 0;
let gotfinalkey = false;

function preload() {
  img = loadImage("Chara_overworld_laughing.webp");
}

function setup() {
  createCanvas(400, 400);
  c1fq3d = random(50, 200);
  c2fq3d = random(50, 150);
  c3fq3d = random(50, 200);
  c4fq3d = random(50, 80);
  if (c1fq3d + c2fq3d + c3fq3d + c4fq3d > 200) {
    c5fq3d = random(50, 80);
  } else {
    c5fq3d = 0;
  }
  dotx = 50;
  doty = 50;
  squarex = 350;
  squarey = 50;
  squarex2 = 200;
  squarey2 = 350;
}

function draw() {
  background(220);

  if (ingame == false) {
    textAlign(CENTER, CENTER);
    if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
      stroke(0, 255, 0);
    } else {
      stroke(0);
    }
    fill(255);
    rect(100, 100, 200);
    fill(0);
    text("START \n DA QUIZ", 200, 200);
  }
  if (ingame == true) {
    stroke(0);
    fill(255, 255, 255);
    circle(playerx, playery, 50);
    if (playerx > 400 && level == 1) {
      level += 1;
      playerx = 200;
    }
    if (playerx > 400 && level == 5) {
      level = 9;
      playerx = 200;
      playery = 200;
    }
    if (level != 6) {
      if (keyIsDown(37)  && playerx > 25) {
        playerspeed = 5;
        playerx -= playerspeed;
      }
      if(keyIsDown(65) && playerx > 25){
        playerspeed = 5;
        playerx -= playerspeed
      }
      if (keyIsDown(39) || keyIsDown(68)) {
        playerspeed = 5;
        if (level == 1 || level == 5) {
          playerx += playerspeed;
        } else if (level != 1 && playerx < 375) {
          playerx += playerspeed;
        }
      }
      if ((keyIsDown(40) && playery < 375)) {
        playery += playerspeed;
      }
      if ((keyIsDown(83)) && playery < 375) {
        playery += playerspeed;
      }
      if (keyIsDown(38) && playery > 25) {
        playery -= playerspeed;
      }
      if ((keyIsDown(87)) && playery > 25) {
        playery -= playerspeed;
      }
    }

    if (level == 1) {
      textSize(10);
      fill(0);
      text(
        "Before you go to the next screen, \nhere is a small tutorial on what you have to do \n\n left click to choose and wasd to move. Simple, right?",
        200,
        50
      );
      textSize(1);
    }
    if (level == 2) {
      textSize(10);
      fill(0);
      text("What is 1 + 1?", 200, 20);
      fill(255);
      rect(50, 100, 100, 50);
      rect(250, 100, 100, 50);
      fill(0);
      text("2", 100, 120);
      text("3", 300, 120);
    }
    if (level == 3) {
      if (start3 == false) {
        fill(0);
        text("The Quiz kind of malfunctioned. Be Right back!", 200, 20);
      } else if (start3 == true) {
        fill(255);
        text("Get the key, and don't touch the blue", 200, 20);
      }
      if (start3 == false) {
        fill(0);
        text("I wonder what this does", 350, 290, 0);
        fill(255);
        circle(350, 350, 50);
      }
      if (dist(playerx, playery, 350, 350) < 50 && start3 == false) {
        start3 = true;
      }
      if (start3 == true && timer > 0) {
        tframe++;
        if (tframe % 60 == 0 && timer > 0) {
          timer--;
        }
        text("You have " + timer + " seconds", 200, 50);
        fill(0, 0, 255);
        circle(100, 300, c1fq3d);
        circle(300, 50, c2fq3d);
        circle(50, 50, c3fq3d);
        circle(200, 200, c4fq3d);
        circle(350, 175, c5fq3d);
        circle(50, 350, 50);
        if (gotkey == false) {
          text("🗝️", 25, 200);
        }
        if (dist(playerx, playery, 100, 300) < c1fq3d / 2 + 25) {
          ingame = false;
        }
        if (dist(playerx, playery, 300, 50) < c2fq3d / 2 + 25) {
          ingame = false;
        }
        if (dist(playerx, playery, 50, 50) < c3fq3d / 2 + 25) {
          ingame = false;
        }
        if (dist(playerx, playery, 200, 200) < c4fq3d / 2 + 25) {
          ingame = false;
        }
        if (dist(playerx, playery, 350, 175) < c5fq3d / 2 + 25) {
          ingame = false;
        }
        if (dist(playerx, playery, 25, 200) < 25 && gotkey == false) {
          gotkey = true;
        }
        if (dist(playerx, playery, 50, 350) < 25) {
          ingame = false;
        }
        if (gotkey == true && level == 3) {
          fill(255);
          circle(350, 350, 50);
          text("Get back here", 300, 300);
        }
        if (
          gotkey == true &&
          level == 3 &&
          dist(playerx, playery, 350, 350) < 50
        ) {
          level += 1;
        }
      } else if (timer == 0) {
        ingame = false;
      } else {
      }
    }
    if (level == 4) {
      fill(0);
      text(
        "Touch the Dots before they disappear! \n If ur lucky, it won't spawnon top of you, GL",
        200,
        20
      );
      text(timerq4, 200, 40);
      tq4f++;
      if (tq4f % 60 == 0 && timerq4 > 0) {
        timerq4--;
      }
      if (timerq4 == 0) {
        ingame = false;
      }
      
      fill(255);
      circle(dotx, doty, 50);
      square(squarex, squarey, 50);
      square(squarex2, squarey2, 50, 23);
      if (dist(playerx, playery, dotx, doty) < 50) {
        dotx = random(50, 350);
        doty = random(50, 350);
        if (dotx <= 200 && doty <= 200) {
          squarex = playerx + random(70, 100);
          squarey = playery + random(70, 100);
          squarex2 = playerx - random(70, 100);
          squarey2 = playery - random(70, 100);
        }
        if (dotx <= 200 && doty >= 200) {
          squarex = playerx + random(70, 100);
          squarey = playery - random(50, 100);
          squarex2 = playerx - random(50, 100);
          squarey2 = playery + random(50, 100);
        }
        if (dotx >= 200 && doty <= 200) {
          squarex = playerx - random(70, 100);
          squarey = playery + random(70, 100);
          squarex2 = playerx + random(70, 100);
          squarey2 = playery - random(70, 100);
        }
        if (dotx >= 200 && doty >= 200) {
          squarex = playerx - random(70, 100);
          squarey = playery - random(70, 100);
          squarex2 = playerx + random(70, 100);
          squarey2 = playery + random(70, 100);
        }
        timerq4 = 3;
        q4score++;
      }
      if (q4score >= 20 && q4score <= 25) {
        fill(255);
        text("u tired yet?", 200, 50);
      }
      if (q4score >= 30 && q4score <= 40) {
        fill(255);
        text("give up already", 200, 50);
      }
      if (q4score == 45) {
        fill(255);
        text("pls stop", 200, 50);
      }
      if (q4score == 46) {
        fill(255);
        text("just... stop", 200, 50);
      }
      if (q4score == 47) {
        fill(255);
        text("no...", 200, 50);
      }
      if (q4score == 48) {
        fill(255);
        text("NO", 200, 50);
      }
      if (q4score == 49) {
        fill(255);
        text("NOOOOOOOOOOOOOOOOOOOOOOO!", 200, 50);
      }

      if (q4score == 50) {
        level += 1;
        playerx = 100;
        playery = 300;
      }
      if (dist(playerx, playery, squarex + 25, squarey + 25) < 50) {
        ingame = false;
      }
      if (dist(playerx, playery, squarex2 + 25, squarey2 + 25) < 50) {
        ingame = false;
      }
    }
    if (level == 5) {
      text("You weren't supposed to beat that LMAO", 100, 20);
      text("Now this \n is impossible :)", 50, 50);
      if (gotfinalkey == false) {
        text("Come back later! - \nAnonymous", 350, 50);
      }
      if (gotfinalkey == true) {
        text("U hax", 350, 50);
      }
      if (gotfinalkey == false) {
        square(50, 150, 50);
      }
      fill(0, 0, 255);
      if (gotfinalkey == false) {
        rect(180, 0, 40, 400);
      }
      if (
        blue(get(playerx + 25, playery)) == 255 &&
        red(get(playerx + 25, playery)) == 0
      ) {
        playerx -= playerspeed;
      }
      if (
        blue(get(playerx, playery - 25)) == 255 &&
        red(get(playerx, playery - 25)) == 0
      ) {
        playery += playerspeed;
      }
      if (
        blue(get(playerx, playery + 25)) == 255 &&
        red(get(playerx, playery + 25)) == 0
      ) {
        playery -= playerspeed;
      }
      if (
        blue(get(playerx - 25, playery)) == 255 &&
        red(get(playerx - 25, playery)) == 0
      ) {
        playerx += playerspeed;
      }
      if (dist(playerx, playery, 75, 175) < 50 && gotfinalkey == false) {
        level += 1;
        playery = 200;
        playerx = 200;
      }
    }

    if (level == 6) {
      fill(255, 0, 0);
      text("Squid Game Tug of War :P", 200, 20);
      if (playerx < 200) {
        text("Pull harder", 200, 30);
      }
      playerspeed = 0;
      fill(255);
      circle(towenemyx, towenemyy, 50);
      fill(0);
      line(towenemyx, towenemyy, playerx, playery);
      towenemyx -= 1;
      playerx -= 1;
      if (playerx < 50) {
        ingame = false;
      }
      if (towenemyx > 400) {
        level += 1;

        playerspeed = 5;
        playerx = 400;
        playery = 400;
        enemy7x = 0;
        enemy7y = 0;
      }
    }
    if (level == 7) {
      sframe++;
      if (sframe % 60 == 0 && survive7 > 0) {
        survive7 -= 1;
      }
      text("Stay in this room for " + survive7 + " seconds", 200, 30);
      fill(0);
      text("Dodge Balls :D", 200, 20);
      playerspeed = 5;
      circle(enemy7x, enemy7y, 50);
      enemy7x += e7spedx;
      enemy7y += e7spedy;
      if (enemy7x < 0) {
        e7spedx = random(3, 8);
      }
      if (enemy7x > 400) {
        e7spedx = random(-8, -3);
      }
      if (enemy7y < 0) {
        e7spedy = random(3, 8);
      }
      if (enemy7y > 400) {
        e7spedy = random(-8, -3);
      }
      if (dist(playerx, playery, enemy7x, enemy7y) < 50) {
        ingame = false;
      }
      if (survive7 < 30) {
        //unverified
        text("Ur still alive? I'll just add another ball", 200, 40);
        circle(enemy7x2, enemy7y2, 50);
        enemy7x2 += e7spedx2;
        enemy7y2 += e7spedy2;
        if (enemy7x2 < 0) {
          e7spedx2 = random(3, 8);
        }
        if (enemy7x2 > 400) {
          e7spedx2 = random(-8, -3);
        }
        if (enemy7y2 < 0) {
          e7spedy2 = random(3, 8);
        }
        if (enemy7y2 > 400) {
          e7spedy2 = random(-8, -3);
        }
      }

      if (dist(enemy7x2, enemy7y2, playerx, playery) < 50 && survive7 < 30) {
        ingame = false;
      }
      if (survive7 == 0) {
        level += 1;
        playerx = 400;
        playery = 400;
        espedx = 5;
        espedy = 5;
      }
    }
    if (level == 8) {
      text("This is the key u need to get past the barrier", 200, 20);
      if (gotfinalkey == false) {
        text("🗝️", 200, 200);
      }
      if (dist(playerx, playery, 200, 200) < 55) {
        gotfinalkey = true;
      }
      rect(300, 190, 50);
      if (dist(playerx, playery, 325, 200) < 75 && gotfinalkey == true) {
        level = 5;
      } else if (
        dist(playerx, playery, 325, 200) < 75 &&
        gotfinalkey == false
      ) {
        text("Get the key!", 200, 300);
      }
    }
    if (level == 9) {
      background(0);

      fill(255);
      let truthtest = prompt("How many times did you fail?");
      text("Were you hacking .....", 200, 20);
      if (truthtest / 1 == truthtest) {
        if (truthtest == fail && gotfinalkey == true) {
          level += 1;
        } 
        else if(truthtest == fail && gotfinalkey == true){
          level += 3
        }
        else {
          level += 2;
        }
      }
      if (truthtest / 1 != truthtest) {
        level += 2;
      }
    }
    if (level == 10) {
      text("u win, gud jub", 200, 20);
      text("Here's your prize: Click here ---->", 200, 300);
      square(300, 275, 50)
      
    }
    if (level == 11) {
      background(0);
      fill(255, 0, 0);
      text("You evil little liar... You're ded eternally >:D", 200, 20);
      image(img, 150, 100, 150, 250);
    }
    if(level == 12){
      background(0)
      fill(255, 0, 0)
      text("How the hell did you do this?", 200, 20)
    }
  }
}
function mousePressed() {
  if (
    ingame == false &&
    mouseX > 100 &&
    mouseX < 300 &&
    mouseY > 100 &&
    mouseY < 300
  ) {
    fail += 1;
    ingame = true;
    playerx = 200;
    playery = 200;
    level = 1;
    start3 = false;
    gotkey = false;
    tframe = 0;
    timer = 10;
    tqf4 = 0;
    timerq4 = 3;
    q4score = 0;
    dotx = 50;
    doty = 50;
    squarex = 350;
    squarey = 50;
    squarex2 = 200;
    squarey2 = 350;
    c1fq3d = random(50, 200);
    c2fq3d = random(50, 150);
    c3fq3d = random(50, 200);
    c4fq3d = random(50, 80);
    enemy7x = 0;
    enemy7y = 0;
    e7spedx = 1;
    e7spedy = 1;
    survive7 = 60;
    sframe = 0;
    towenemyx = 50;
    towenemyy = 200;
    enemy7x2 = 0;
    enemy7y2 = 0;
    e7spedx2 = 5;
    e7spedy2 = 5;
    gotfinalkey = false;
    if (c1fq3d + c2fq3d + c3fq3d + c4fq3d > 200) {
      c5fq3d = random(50, 80);
    } else {
      c5fq3d = 0;
    }
  }
  if (level == 2 && dist(playerx, playery, 100, 120) < 50) {
    level += 1;
  } else if (
    level == 2 &&
    playerx > 250 &&
    playerx < 350 &&
    playery > 100 &&
    mouseY < 300
  ) {
    ingame = false;
  }
  if (level == 6) {
    playerx += 9;
    towenemyx += 9;
  }
  if(level == 10 && mouseX <= 350 && mouseX >= 300 && mouseY > 275 && mouseY < 325){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
}
