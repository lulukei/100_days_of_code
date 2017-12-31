var radius = 250;
var x = -radius;
var speed = 5;

function setup(){
  createCanvas(1300, 800);
  ellipseMode(RADIUS);
}

function draw(){
  background(33, 222, 94);
  x+= speed;
  fill(222, 993, 22)
  noStroke();
  arc(x, 400, radius, radius, 0.52, 5.76);
}
