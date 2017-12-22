function setup() {
  createCanvas(1300, 800);
  background(38, 78, 333);
  fill(255, 204, 153);
}

function draw() {
  rotate(mouseX/80);
  rect(400, 400, 100, 100);
}
