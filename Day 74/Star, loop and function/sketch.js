function setup() {
  createCanvas(640, 360);
}

function draw() {
  for (var x = 10; x < width; x += 100) {
    drawStar(x, 200);
  }  
}

function drawStar(x, y) {
  beginShape();
  vertex(x, y-50);
  vertex(x+14, y-20);
  vertex(x+47, y-15);
  vertex(x+23, y+7);
  vertex(x+29, y+40);
  vertex(x, y+25);
  vertex(x-29, y+40);
  vertex(x-23, y+7)
  vertex(x-47, y-15);
  vertex(x-14, y-20)
  endShape(CLOSE);
}
