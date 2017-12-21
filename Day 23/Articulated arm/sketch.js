var angle = 0
var speed = 0.005
var angleDirection = 1

function setup(){
  createCanvas(1300, 800);
  stroke(130, 198, 255);
}

function draw(){
  background(129, 119, 113);
  strokeWeight(13);
  translate(400, 200);
  rotate(angle);
  line(0, 0, 300, 0)
  translate(300, 0);
  rotate(angle*2);
  strokeWeight(9);
  line(0, 0, 200, 0);
  translate(200, 0);
  rotate(angle*2.5);
  strokeWeight(3);
  line(0, 0, 100, 0);

  angle+= speed*angleDirection
  if (angle > QUARTER_PI || angle < 0 ) {
    angleDirection*= -1
  }
}
