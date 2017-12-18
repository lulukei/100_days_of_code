function setup() {
  createCanvas(800, 600);
  strokeWeight(10);
  stroke(255);
  background(25, 45, 76);
}

function draw() {
  for (i = 20; i < 750; i += 50) {
   line (i, 20, i+60, 550);
  }
}
