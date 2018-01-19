var r;
var g;
var b;
var x;
var y;
var diameter;
var a;

function setup() {
  createCanvas(1300, 800);
  noStroke();

}

function draw(){
  r = random(0, 173);
  g = random(0, 255);
  b = random(0, 152);
  x = random(width);
  y = random(height);
  a = random(0, 255);
  diameter = random(0, 40);
  fill(r, g, b, a);
  ellipse(x, y, diameter, diameter);

}
