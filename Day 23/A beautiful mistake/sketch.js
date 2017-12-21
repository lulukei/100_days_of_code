var angle = 0
var speed = 0.005
var angleDirection = 1

function setup(){
  createCanvas(1300, 800);
  background(129, 119, 113);
  stroke(222, 883, 991);
}

function draw(){
  translate(400, 200);
  rotate(angle);
  stroke(13)
  line(0, 0, 300, 0)
  translate(400, 0);
  rotate(angle*2);
  stroke(9);
  line(0, 0, 200, 0);
  translate(200, 0);
  rotate(angle*2.5);
  line(0, 0, 100, 0);

  angle+= speed*angleDirection
  if (angle > QUARTER_PI || angle < 0 ) {
    angleDirection*= -1
  }
}
