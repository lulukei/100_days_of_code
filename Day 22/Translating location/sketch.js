
function setup() {
  createCanvas(1300, 800);
  background(38, 78, 333);
  fill(255, 204, 153);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0, 0, 300, 200);
}
