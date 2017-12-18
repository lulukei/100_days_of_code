var radius = 5

function setup() {
  createCanvas(800, 600);
  noStroke();
  background(36, 0, 106);
  fill(222, 87, 194);
  stroke(222, 87, 194);
  ellipseMode(RADIUS);
}

function draw() {
  for (x = 10; x < width+15; x += 40)
    for (y = 10; y < height+15; y += 40) {
      ellipse(x, y, radius, radius);
      line(x, y, width/2, height/2);
  }
}
