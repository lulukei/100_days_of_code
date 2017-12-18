function setup() {
  createCanvas(600, 600);
  background(68, 31, 255);
  stroke(255, 162, 131, 80);
  strokeWeight(19);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
