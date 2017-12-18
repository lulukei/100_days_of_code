function setup() {
  createCanvas(800, 600);
  background(255, 255, 255);
}

function draw() {
  strokeWeight(5);
  strokeJoin(ROUND);
  stroke(0, 0, 0);
  triangle(380, 80, 520, 320, 280, 280);
  strokeWeight(10);
  strokeJoin(ROUND);
  stroke(255, 0, 0);
  triangle(400, 100, 500, 300, 300, 300);
}
