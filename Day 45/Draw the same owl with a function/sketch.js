function setup(){
  createCanvas(1300, 800);
  background(0, 102, 204);
  rectMode(CENTER);
}

function draw() {
  for (var x = 80; x < width + 256; x+=128) {
    owl(x, 300);
  }
}

function owl(x,y) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(128);
  line(0, -7, 0, 50); //body
  noStroke(0);
  fill(255);
  arc(0, 0, 126, 126, 0, PI); //chin
  fill(255);
  ellipse(-30, 0, 66, 66); //left eye ball
  ellipse(30, 0, 66, 66); //left eyeball
  fill(0);
  ellipse(-30, 0, 10, 10); //left eye
  ellipse(30, 0, 10, 10); //right eye
  quad(0, 10, 10, 30, 0, 50,  -10, 30); //beak
  pop();
}
