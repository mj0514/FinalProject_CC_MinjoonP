let stage1 = false;
let stage2 = false;
let stage3 = false;
let stage4 = false;
let ending = false;
//stage1
let score = 0;
let balls = 10;
let soccer_ball_img;
let soccer_ball;
let goal_post;
let kick_sound;
let start_button;
let rot = 3.5;
let speed = 0.03;
let booing;
//stage2
let chance = 2;
let star;
let crane;
let crash_sound;
//stage3

let p1;
let p2;
let p3;
let p4;
let p_5;
let p6;
let p7;
let p8;
let p9;

let piece1;
let piece2;
let piece3;
let piece4;
let piece5;
let piece6;
let piece7;
let piece8;
let piece9;

let ds1;
let ds2;
let ds3;
let ds4;
let ds5;
let ds6;
let ds7;
let ds8;
let ds9;

let time = 60;

//stage4
let button1_img;
let button2_img;
let hand_img;
let button;
let hand;
let time2 = 5;
let bgm;

let wall1, wall2, stick;
function preload(){
  soccer_ball_img  = loadImage('image/soccer_ball.png');
  goal_post = loadImage('image/soccer_goal_post.png');
  star = loadImage('image/star.png');
  kick_sound = loadSound('sound/ball_kick.wav');
  crane = loadImage('image/crane.png');
  crash_sound = loadSound('sound/crash.wav');
  booing = loadSound('sound/booing.wav');
  bgm = loadSound('sound/serious_music.wav');
  p1 = loadImage('image/piece1.png');
  p2 = loadImage('image/piece2.png');
  p3 = loadImage('image/piece3.png');
  p4 = loadImage('image/piece4.png');
  p_5 = loadImage('image/piece5.png');
  p6 = loadImage('image/piece6.png');
  p7 = loadImage('image/piece7.png');
  p8 = loadImage('image/piece8.png');
  p9 = loadImage('image/piece9.png');
  button1_img = loadImage('image/button1.png');
  button2_img = loadImage('image/button2.png');
  hand_img = loadImage('image/hand.png');
}

function setup() {
  createCanvas(1200, 900);
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  start_button = createButton('START');
  start_button.position(520,400);
  start_button.style('background-color:transparent; font-size:50px');

  start_button.mousePressed(startGame);
  soccer_ball = createSprite(width/2, height-100);
  soccer_ball.addImage(soccer_ball_img);

  stick = createSprite(180, 0);
  stick.addImage(crane);
  stick.shapeColor = color(0);
  stick.setCollider('rectangle',0,0,130,300);
  wall1 = createSprite(400, height-200, 600, 380);
  wall1.shapeColor = color(0);
  wall1.setCollider('rectangle',0,0,100,380);
  wall2 = createSprite(950, height-200, 300, 380);
  wall2.shapeColor = color(0);
  wall2.setCollider('rectangle', 0, 0, 600, 380);


  piece1 = createSprite(910,150);
  piece1.addImage(p1);
  
  piece1.onMousePressed = function () {
    if (ds1 == null) {
      ds1 = this;
    }
  };
  
  piece1.onMouseReleased = function () {
    if (ds1 == this) {
      ds1 = null;
    }

  };
  
  piece2 = createSprite(220,150);
  piece2.addImage(p2);

  piece2.onMousePressed = function () {
    if (ds2 == null) {
      ds2 = this;
    }
  };
  
  piece2.onMouseReleased = function () {
    if (ds2 == this) {
      ds2 = null;
    }

  };

  piece3 = createSprite(680,150);
  piece3.addImage(p3);
  piece3.onMousePressed = function () {
    if (ds3 == null) {
      ds3 = this;
    }
  };
  
  piece3.onMouseReleased = function () {
    if (ds3 == this) {
      ds3 = null;
    }

  };

  piece4 = createSprite(450,150);
  piece4.addImage(p4);
  piece4.onMousePressed = function () {
    if (ds4 == null) {
      ds4 = this;
    }
  };
  
  piece4.onMouseReleased = function () {
    if (ds4 == this) {
      ds4 = null;
    }
  };

  piece5 = createSprite(220,400);
  piece5.addImage(p_5);
  piece5.onMousePressed = function () {
    if (ds5 == null) {
      ds5 = this;
    }
  };
  
  piece5.onMouseReleased = function () {
    if (ds5 == this) {
      ds5 = null;
    }
  };

  piece6 = createSprite(220,650);
  piece6.addImage(p6);
  piece6.onMousePressed = function () {
    if (ds6 == null) {
      ds6 = this;
    }
  };
  
  piece6.onMouseReleased = function () {
    if (ds6 == this) {
      ds6 = null;
    }
  };

  piece7 = createSprite(910,650);
  piece7.addImage(p7);
  piece7.onMousePressed = function () {
    if (ds7 == null) {
      ds7 = this;
    }
  };
  
  piece7.onMouseReleased = function () {
    if (ds7 == this) {
      ds7 = null;
    }
  };

  piece8 = createSprite(910,400);
  piece8.addImage(p8);
  piece8.onMousePressed = function () {
    if (ds8 == null) {
      ds8 = this;
    }
  };
  
  piece8.onMouseReleased = function () {
    if (ds8 == this) {
      ds8 = null;
    }
  };

  piece9 = createSprite(600,700);
  piece9.addImage(p9);
  piece9.onMousePressed = function () {
    if (ds9 == null) {
      ds9 = this;
    }
  };
  
  piece9.onMouseReleased = function () {
    if (ds9 == this) {
      ds9 = null;
    }
  };
  
  setInterval(timer, 1000);

  hand = createSprite(150, height/2);
  hand.addImage(hand_img);
  button = createSprite(width-300, height/2-31);
  button.addImage(button1_img);
}

function draw() {
  if(stage1){
    start_button.hide();
    stage1page();
  }else if(stage2){
    stage2page();
    start_button.hide();
  }else if(stage3){
    stage3page();
  }else if(stage4){
    stage4page();
  }else if(ending){
    endingpage();
  }
  if(balls == -1){
    stage2 = true;
    stage1 = false;
    balls--;
  }
}

function startGame(){
  start = false;
  stage1 = true;
}

function stage1page(){
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Score: " + score + "       Balls: " + balls, 0, 50, width);
  text("Press the ball to kick.", width/2, height-40);
  image(goal_post, width/2-300, 100);
  soccer_ball.onMousePressed = function (){
    kick_sound.play();
    let a = random(0,1)
    if(a > 0.5){
      soccer_ball.setSpeed(10,random(220,235));
    }else{
      soccer_ball.setSpeed(10,random(305,320));
    }
    
  }
  if(soccer_ball.position.x < 0 || soccer_ball.position.x > width || soccer_ball.position.y < 0){
    soccer_ball = createSprite(width/2, height-100);
    soccer_ball.addImage(soccer_ball_img);
    balls--;
  }
  if(balls == -1){
    booing.play();
  }
  drawSprite(soccer_ball);
  stroke(0);
  strokeWeight(2);
  translate(width/2, height-100);
  rot+=speed;
  if(rot >= 4.2){
    speed *= -1;
  }else if(rot <= 2){
    speed *= -1;
  }
  rotate(rot);
  line(0, 50, 0, 100);
}

function stage2page(){
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  fill(0);
  textSize(30);
  text("Chance: " + chance, width-360, 50);
  textSize(20);
  textAlign(CENTER,CENTER);
  text("Try to get the star!",width-300,100);
  text("Press 'z' to move right (can't move left)",width-300, 150);
  text("Press 'x' to move down (can't move up)", width-300, 200);
  text("Press 'r' to restart (can't move up)", width-300, 250);

  image(star, 710, 800,80,80);
  if(keyDown('z')){
    stick.setSpeed(1,0);
  }
  if(keyDown('x')){
    stick.setSpeed(1, 90);
  }
  if(stick.position.x > width-180){
    stick.setSpeed(0,0);
    //crash_sound.play();
  }
  if(stick.position.y >= height-700){
    stick.setSpeed(0,0);
    //crash_sound.play();
  }
  drawSprite(wall1);
  drawSprite(wall2);
  drawSprite(stick);
}

function stage3page(){
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  fill(0);
  textSize(20);
  text("Solve the puzzle in 60 seconds!", 150, height-100);
  textSize(30);
  text("Time Left: " + time, 150, height-50);
  if (ds1 != null) {
    ds1.position.x = mouseX;
    ds1.position.y = mouseY;
  }
  if (ds2 != null) {
    ds2.position.x = mouseX;
    ds2.position.y = mouseY;
  }
  if (ds3 != null) {
    ds3.position.x = mouseX;
    ds3.position.y = mouseY;
  }
  if (ds4 != null) {
    ds4.position.x = mouseX;
    ds4.position.y = mouseY;
  }
  if (ds5 != null) {
    ds5.position.x = mouseX;
    ds5.position.y = mouseY;
  }
  if (ds6 != null) {
    ds6.position.x = mouseX;
    ds6.position.y = mouseY;
  }
  if (ds7 != null) {
    ds7.position.x = mouseX;
    ds7.position.y = mouseY;
  }
  if (ds8 != null) {
    ds8.position.x = mouseX;
    ds8.position.y = mouseY;
  }
  if (ds9 != null) {
    ds9.position.x = mouseX;
    ds9.position.y = mouseY;
  }
  if(time == 0){
    booing.play();
    stage3 = false;
    stage4 = true;
    bgm.play();
  }
  drawSprite(piece1);
  drawSprite(ds1);
  drawSprite(piece2);
  drawSprite(ds2);
  drawSprite(piece3);
  drawSprite(ds3);
  drawSprite(piece4);
  drawSprite(ds4);
  drawSprite(piece5);
  drawSprite(ds5);
  drawSprite(piece6);
  drawSprite(ds6);
  drawSprite(piece7);
  drawSprite(ds7);
  drawSprite(piece8);
  drawSprite(ds8);
  drawSprite(piece9);
  drawSprite(ds9);
}

function stage4page(){
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  fill(0);
  rect(1150, 100, 50,700);
  image(button2_img, width-200, 200);
  hand.setSpeed(0.2,0);
  print("position", hand.position.x);
  if(hand.position.x >= 730 && hand.position.x < 750){
    button.setSpeed(0.2,0);
  }else if(hand.position.x >= 870){
    hand.setSpeed(0,0);
    button.setSpeed(0,0);
  }
  if(time2 == 0){
    booing.play();
    stage4 = false;
    ending = true;
  }
  drawSprite(hand);
  drawSprite(button);
}

function endingpage(){
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  fill(0);
  textSize(150);
  text("Game Over", 220, height/2);
  textSize(50);
  text("Thank you for playing!!!", width/2-270, height-200);
}

function keyPressed(){
  if(key == 'r'){
    if(chance == 1){
      stage2 = false;
      stage3 = true;
      booing.play();
      chance--;
    }else{
      stick.position.x = 180;
      stick.position.y = 0;
      stick.setSpeed(0,0);
      chance--;
    }
  }
}

function timer(){
  if(chance <= 0){
    if(time >= -1){
      time--;
    }
  }
  if(hand.position.x >= 870){
    if(time2 >= -1){
      time2--;
    }
  }
}