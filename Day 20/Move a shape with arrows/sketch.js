x = 215
y = 300


function setup() {
  createCanvas(1300, 800);
  background(83,88, 33);
  strokeWeight(5);
  fill(235, 135, 47);
}

function draw() {
  background(83,88, 33);
  if(keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
    x--;
    }
    if (keyCode == RIGHT_ARROW) {
    x++;
    }
    if (keyCode == UP_ARROW) {
    y--;
    }
    if (keyCode == DOWN_ARROW) {
    y++;
    }
  }
  rect(x, y, 200, 200);
}
