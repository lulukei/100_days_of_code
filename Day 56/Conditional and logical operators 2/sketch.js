var x = 50;
var y = 50;
var w = 100;
var h = 100;

function setup() {
  createCanvas(1300, 800);
}

function draw() {
  background(56, 39, 67);
  stroke(0);
  if (mouseX > 50 && mouseX < 150) {
    fill(33, 49, 21);
  } else {
    fill(22, 94, 83);
  }
  rect(x, y, w, h);
}
