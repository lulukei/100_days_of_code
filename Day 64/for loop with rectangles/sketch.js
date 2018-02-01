var spacing = 30;

function setup() {
  createCanvas(800, 600);
}

function draw() {
    for (y = 80; y <= height; y += spacing){
    fill(45, 0, 68);
    rect(10, y, width-30, 20);
  }
}
