var y = 80;
var spacing = 30;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  while (y <= height){
    fill(45, 0, 68);
    rect(10, y, width-30, 20);
    y = y + spacing;
  }
}
