function setup() {
  createCanvas(640, 360);
  background(23, 58, 230);
  noStroke();
}

function draw() {
if (mouseIsPressed){
    drawStar(mouseX, mouseY);
  }
}

function drawStar(mouseX, mouseY) {
  beginShape();
  vertex(mouseX, mouseY-50);
  vertex(mouseX+14, mouseY-20);
  vertex(mouseX+47, mouseY-15);
  vertex(mouseX+23, mouseY+7);
  vertex(mouseX+29, mouseY+40);
  vertex(mouseX, mouseY+25);
  vertex(mouseX-29, mouseY+40);
  vertex(mouseX-23, mouseY+7)
  vertex(mouseX-47, mouseY-15);
  vertex(mouseX-14, mouseY-20)
  endShape(CLOSE);
}
