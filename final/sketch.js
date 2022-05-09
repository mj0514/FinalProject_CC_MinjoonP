let stage1 = false;
let stage2 = false;
let score = 0;
let balls = 10;
let soccer_ball_img;
let soccer_ball;
let goal_post;
let kick_sound;
let start_button;
let chance = 5;
let star;

let wall1, wall2, stick;
function preload(){
  soccer_ball_img  = loadImage('image/soccer_ball.png');
  goal_post = loadImage('image/soccer_goal_post.png');
  star = loadImage('image/star.png');
  kick_sound = loadSound('sound/ball_kick.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#57595D');
  fill(255);
  rect(100,20, width-200, height-30, 20);
  start_button = createButton('START');
  start_button.position(width/2-100,height/2-100);
  start_button.style('background-color:transparent; font-size:50px');
  start_button.mousePressed(startGame);
  soccer_ball = createSprite(width/2, height-100);
  soccer_ball.addImage(soccer_ball_img);
  stick = createSprite(180, 0, 130, 600);
  stick.shapeColor = color(0);
  stick.setCollider('rectangle',0,0,130,300);
  wall1 = createSprite(600, height-200, 1000, 380);
  wall1.shapeColor = color(0);
  wall1.setCollider('rectangle',0,0,100,380);
  wall2 = createSprite(width-400, height-200, 600, 380);
  wall2.shapeColor = color(0);
  wall2.setCollider('rectangle', 0, 0, 600, 380);
}

function draw() {
  if(stage1){
    start_button.hide();
    stage1page();
  }else if(stage2){
    stage2page();
    start_button.hide();
  }
  if(balls < 0){
    stage2 = true;
    stage1 = false;
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
  text("Press the ball to kick.", width/2, height-200);
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
  drawSprite(soccer_ball);
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
  image(star, 1120, height-100,80,80);
  if(keyDown('z')){
    stick.setSpeed(1,0);
  }
  if(keyDown('x')){
    stick.setSpeed(1, 90);
  }
  if(stick.position.x > width-180){
    stick.setSpeed(0,0);
  }
  if(stick.position.y >= height-685){
    stick.setSpeed(0,0);
  }
  drawSprite(wall1);
  drawSprite(wall2);
  drawSprite(stick);
}

function keyPressed(){
  if(key == '1'){
    if(stage1 == true){
      stage1 = false;
      stage2 = true;
    }else{
      stage1 = true;
      stage2 = false;
    }
  }
  if(key == 'r'){
    stick.position.x = 180;
    stick.position.y = 0;
    stick.setSpeed(0,0);
    chance--;
  }
}