var diameter = 70;
var speed = 200;
var x = 0;
var y = 0;

function setup() {
  frameRate(30);
  createCanvas(1300, 800);
  x = width/2;
  y = height/2;
  noStroke();
  background(174, 198, 207);
  fill(0, 0, 0, 5);

}

function draw() {
  diameter= random(100, 300);
  x+= random(-speed, speed);
  y+= random(-speed, speed);
  ellipse(x, y, diameter, diameter);
  y = constrain(x, 0, height);
  x = constrain(y, 0,  width);
}
