var x;
var y;
var x2;
var y2;
var speed = 1;
var gravity = 0.1;
var radius = 100;
var radius2 = 200;
var r;
var g;
var b;

function setup() {
  createCanvas(1000, 600);
  x = width/2;
  y = 0;
  x2 = 0;
  y2 = height/2;
}

function draw() {

  background(255, 127, 80);
  // Draw ball1
  r = random(100);
  g = random(100);
  b = random(100);
  fill(r, g, b, 200);
  noStroke();
  ellipse(x, y, radius, radius);

  // Draw ball2
  fill(r, g, b, 200);
  noStroke();
  ellipse(x2, y2, radius2, radius2);

  //Set up ball1 gravity
  y = y + speed;
  speed = speed + gravity;

  //Make the ball1 bounce
  if (y > height) {
    speed = speed * -0.95;
    y = height;
  }

  //Set up ball2 gravity
    x2 = x2 + speed;
    speed = speed + gravity;

  //Make the ball2 bounce
    if (x2 > width) {
      speed = speed * -0.95;
      x2 = width;
    }
}
