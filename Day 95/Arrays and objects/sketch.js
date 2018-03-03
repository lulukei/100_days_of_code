var bubbles = [];

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 200; i ++) {
    bubbles [i] = {
      x : random(0, width),
      y : random(0, height),
      display : function () {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 20, 20);
      }
      move : function () {
          this.x = this.x + random(0, 1);
          this.y = this.y + random(0, 1);
     }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].display();
  }
}
