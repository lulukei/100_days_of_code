function setup() {
  createCanvas(800, 600);
  strokeWeight(9)
 }

function draw() {
  background(340, 44, 222);
  for (var x = 20; x < width +15; x += 20) {
    for (var y = 20; y < height + 15; y += 20)
    ellipse(x, y, 40, 40);
  }
}
