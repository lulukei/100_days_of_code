var x = 0;
var y = 0;
var state = 0;
var speed = 5;
var length = 60
var r;
var g;
var b;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255,127,80);
  noStroke();
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);
  rect(x, y, length, length);

  if (state == 0) {
    x = x + speed;
    if (x > width - length) {
      x = width - length;
      state = 2;
    }
  } else if (state == 2) {
      y = y + speed;
        if (y > height -length) {
          y = height -length;
          state = 3 ;
        }
  } else if (state == 3) {
      x = x - speed ;
        if (x < 0) {
          x = 0;
          state = 4;
        }
  } else if (state == 4) {
      y = y - speed ;
        if (y < 0) {
          y = 0;
          state = 0
        }
  }
}
