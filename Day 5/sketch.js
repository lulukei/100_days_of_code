function setup() {
  createCanvas(800, 600);
  strokeWeight(5);
  stroke(255);
  background(25, 45, 76);
}

function draw() {
 for (i = 20, i < 750, i += 30) {
 line (i, 20, i+i/2, 550);
 }
}
