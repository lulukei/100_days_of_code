
function setup() {
  createCanvas(1300, 800);
  background(38, 78, 333);
  fill(255, 204, 153);
}

function draw() {
  rotate(mouseX/150);
  rect(300, 200, 600, 400);
}
