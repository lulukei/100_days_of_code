var radius = 90;
var x = - 0;
var speed = 10;

function setup() {
  createCanvas(1800, 800);
  ellipseMode(RADIUS);
}

function draw() {
  background(237, 882, 33);
  x += speed;
  if (x > width + radius) {
    x = -radius;
  }
  fill(23, 68, 433);
  arc(x, 0, radius, radius, 0.52, 0.76);
  arc(x, 100, radius, radius, 0.52, 0.76);
  arc(x, 200, radius, radius, 0.52, 0.76);
  arc(x, 300, radius, radius, 0.52, 0.76);
  arc(x, 400, radius, radius, 0.52, 0.76);
  arc(x, 500, radius, radius, 0.52, 0.76);
  arc(x, 600, radius, radius, 0.52, 0.76);
  arc(x, 700, radius, radius, 0.52, 0.76);
  arc(x, 800, radius, radius, 0.52, 0.76);
}
