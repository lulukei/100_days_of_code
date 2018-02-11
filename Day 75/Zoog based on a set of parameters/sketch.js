
function setup() {
  createCanvas(1300, 800);
}

function draw() {
  background(255);
  drawZoog(100, 100, 180, 100, 25, 182);
  drawZoog(400, 100, 300, 100, 25, 200);
  drawZoog(700, 100, 180, 100, 25, 18);


}

function drawZoog(x, y, outerEye, eyeBall, pupil, b) {
  strokeWeight(20);
  line(x, y, x-75, y +100);
  line(x, y, x, y + 150);
  line(x, y, x + 75, y + 100);
  //outer eye
  strokeWeight(6);
  fill(255);
  ellipse(x, y, outerEye, outerEye);
  fill(93, 155, b);
  //eyeball
  ellipse(x, y, eyeBall, eyeBall);
  //pupil
  fill(0);
  ellipse(x, y, pupil, pupil);
}
