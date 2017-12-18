function setup() {
  createCanvas(500,500);
  background(255);
  noStroke();
}

function draw() {
  if (keyIsPressed) {
      quad(250, 80, 350, 230, 250, 400, 150, 230)
      fill(189, 227, 237)
  }
}
