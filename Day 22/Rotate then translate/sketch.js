var angle = 0;
function setup() {
  createCanvas(1300, 800);
  background(38, 78, 333);
  fill(255, 204, 153);
}

function draw() {
  angle += 0.01;
  rotate(angle);
  translate(mouseX, mouseY);
  rect(-300, -200, 600, 400);
}
