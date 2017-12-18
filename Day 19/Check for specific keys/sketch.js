function setup() {
  createCanvas(800, 600);
  background(83,88, 33);
  strokeWeight(5);
}

function draw() {
  background(83,88, 33);
  if(keyIsPressed) {
    if ((key == 'h') || (key == 'H')) {
    line(300, 225, 450, 225);
    }
    if ((key == 'n') || (key == 'N')) {
    line(300, 150, 450, 300);
    }
  }
  line(300, 150, 300, 300);
  line(450, 150, 450, 300);
}
