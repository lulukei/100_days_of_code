
function setup() {
  createCanvas(1300, 800);
  strokeWeight(12);
}

function draw() {
  var r = map(mouseX, 0, width, 0, 25)
  var g = map(mouseX, 0, width, 0, 30)
  var b = map(mouseX, 0, width, 0, 300)
  background(r, g, b);
}
