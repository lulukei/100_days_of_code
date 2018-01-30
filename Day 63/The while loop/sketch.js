var y = 80;
var x = 50;
var spacing = 10;
var len = 20;
var endLegs = 150;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  while (x <= endLegs){
    line(x, y, x, y + len);
    x = x + spacing;
  }
}
