var angle = 0.0;
var speed = 0.010;
var angleDirection = 1;

function setup() {
  createCanvas(1300, 800);
  stroke(0);
  strokeWeight(15);
}

function draw(){
  // essuie-glasse droit
  background(161, 202, 241);
  push();
  translate(650, 500);
  rotate(angle);
  line(0, 0, 0, -400);
  angle+= speed*-angleDirection;
  if ((angle > HALF_PI  || angle < 0)) {
    angleDirection*= -1;
  }
  pop();

  //essuie-glasse gauche
  translate(600, 500);
  rotate(-angle);
  line(0, 0, 0, -400);
  angle+= speed*-angleDirection;
  if ((angle > radians(-90) || angle > 0)) {
    angleDirection*=1;
  }
}
