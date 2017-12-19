
function setup() {
  createCanvas(1300, 800);
  strokeWeight(12);
}

function draw() {
  background(22, 882, 289);
  stroke(133, 22, 22);
  line(mouseX, 0, mouseX, height);
  stroke(22, 33, 299);
  mx = map(mouseX, 0, width, 500, 100);
  line(mx, 0, mx, height);
}
