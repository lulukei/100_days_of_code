function setup() {
  createCanvas(600, 600);
  background(68, 31, 255);
  stroke(255, 162, 131, 80);
}

function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY)
  strokeWeight(weight)
  line(mouseX, mouseY, pmouseX, pmouseY)
}
