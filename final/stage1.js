function stage1(){
	background(255);
	fill(255);
	rect(100,20, width-200, height-30, 20);
	textSize(30);
  	textAlign(CENTER, CENTER);
  	fill(0);
  	text("Score: " + score + "       Balls: " + balls, 50, 50, width);
  	image(goal_post, width/2-250, 100,);
  	soccer_ball = createSprite(200, 200, 100, 100);
  	soccer_ball.addImage(soccer_ball_img);
  	drawSprites();
}