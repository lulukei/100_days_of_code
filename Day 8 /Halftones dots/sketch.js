function setup() {
  createCanvas(800,600);
  noStroke();
  background(49, 232, 154);
  fill(242, 154, 232);
}

function draw() {
  for (y = 0; y < height-450; y += 20)
    for (x = 0; x < width+10; x += 40) {
      ellipse(x+y, y, (150-y)/10, (150-y)/10)
    }
}
