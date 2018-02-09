function setup(){
  createCanvas(1300, 800);
  ellipseMode(CENTER);
}

function draw(){
  background(255, 78, 125);
  drawFlower(1000, 600, 100, 100, 80, 155);
  drawFlower(800, 400, 60, 60, 32, 87);
  drawFlower(500, 500, 140, 140, 250, 56);
  drawFlower(200, 300, 100, 100, 100, 20);
  drawFlower(1200, 200, 20, 20, 38, 200);
  drawFlower(650, 200, 120, 120, 38, 28);

}

function drawFlower(x, y, w, h, b, g) {
  var offset = h/2;
  fill(0, 0, b);
  ellipse(x - offset, y - offset, w, h);
  ellipse(x - offset, y + offset, w, h);
  ellipse(x + offset, y + offset, w, h);
  ellipse(x + offset, y - offset, w, h);
  fill(0, g, 0);
  ellipse(x, y, w, h);
}
