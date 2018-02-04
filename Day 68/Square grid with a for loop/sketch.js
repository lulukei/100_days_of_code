function setup() {
  createCanvas(1300, 800);
  frameRate(1);
}

function draw() {
  for (x = 0; x < width - 30; x += 30) {
    for (y = 0; y < height - 30; y += 30) {
    rect(x, y, 30, 30);
    fill(0, random(255), 0);
    }
  }
}
