function setup(){
  createCanvas(1300, 800);
  background(0, 102, 204);
  rectMode(CENTER);
}

function draw() {
  randomSeed(0);
  for (var x = 80; x < width + 128; x+=128) {
    var g = int(random(0, 120));
    var s = random(0.2, 1);
    owl(x, 300, g, s);
  }
}

function owl(x, y, g, s) {
  push();
  translate(x, y);
  scale(s);
  stroke(g);
  strokeWeight(128);
  line(0, -7, 0, 50); //body
  noStroke(0);
  fill(255);
  arc(0, 0, 126, 126, 0, PI); //chin
  fill(255-g);
  ellipse(-30, 0, 66, 66); //left eye ball
  ellipse(30, 0, 66, 66); //left eyeball
  fill(g);
  ellipse(-30, 0, 10, 10); //left eye
  ellipse(30, 0, 10, 10); //right eye
  quad(0, 10, 10, 30, 0, 50,  -10, 30); //beak
  pop();
}
