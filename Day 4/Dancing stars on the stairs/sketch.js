function setup() {
  createCanvas(400, 300);
  background(247, 25, 107);
}

function draw() {

//Dancing star
  fill(25, 247, 141);
  beginShape();
  vertex(100, 100);
  vertex(120, 160);
  vertex(200, 100);
  vertex(140, 180);
  vertex(140, 240);
  vertex(100, 180);
  vertex(60, 240);
  vertex(80, 180);
  vertex(80, 180);
  vertex(20, 160);
  vertex(80, 160);
  endShape(CLOSE);

//Stairs
  beginShape();
  vertex(180, 240);
  vertex(180, 200);
  vertex(220, 200);
  vertex(220, 180);
  vertex(260, 180);
  vertex(260, 120);
  vertex(400, 120);
  vertex(400, 120);
  endShape(CLOSE);

//Sunbeams
  noFill();
  strokeWeight(2);
  arc(400, 0, 80, 80, HALF_PI, PI);
  arc(400, 0, 120, 120, radians(100), radians(170));
  arc(400, 0, 160, 160, radians(120), radians(150));
}
