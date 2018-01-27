var button = false;
var x = 325;
var y = 200;
var radius = 120;

function setup() {
  createCanvas(650, 400);
  print("setup");
  ellipseMode(RADIUS);
}

function draw() {
  if(button) {
    background(255);
  } else {
    background(0);
  }
  ellipse(x, y, radius, radius);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius){
  button = !button;
  }
}
