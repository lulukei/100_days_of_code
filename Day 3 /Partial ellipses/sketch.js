function setup() {
  createCanvas(800, 600);
}

function draw() {
  arc(100, 100, 100, 100, PI + HALF_PI, TWO_PI+HALF_PI);
  arc(250, 250, 100, 100, PI, PI+HALF_PI);
  arc(500, 250, 100, 100, 0, PI+HALF_PI);
  arc(650, 250, 100, 100, 0, QUARTER_PI);
  arc(600, 400, 100, 100, radians(-10), radians(190));
}
