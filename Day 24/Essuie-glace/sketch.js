var angle = 0.0;
var speed = 0.030;
var angleDirection = 1;

function setup() {
  createCanvas(1300, 800);
  stroke(0);
  strokeWeight(15);

}

function draw(){
  // essuie glasse droit
  background(161, 202, 241);
  translate(650, 500);
  rotate(angle);
  line(0, 0, -400, 0);
  angle+= speed*-angleDirection;
  if ((angle > PI || angle < 0)) {
    angleDirection*= -1;
  }
}
