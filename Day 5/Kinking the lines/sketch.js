function setup() {
  createCanvas(800, 600);
  strokeWeight(1);
  stroke(255);
  background(25, 45, 76);
}

function draw() {
  for (i = 200; i < 750; i+= 30) {
    line(i, 0, i - i/2, 300);
    line(i - i/2, 300, i*1.2, 600);
  }
}
