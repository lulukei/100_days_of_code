var angle = 0.0;
var scalar = 4;
var offsetx = 650;
var offsety = 400;
var speed = 0.5;
var radius = 2;

function setup(){
  createCanvas(1300, 800);
  ellipseMode(RADIUS);
  noStroke();
  frameRate(30);
  background(0, 0, 102);
}

function draw(){
  x = offsetx + sin(angle)*scalar;
  y = offsety + cos(angle)*scalar;
  ellipse(x, y, radius, radius);
  angle+=speed;
  scalar+=speed;



}
