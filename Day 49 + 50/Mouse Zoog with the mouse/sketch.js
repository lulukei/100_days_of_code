x = 650;
y = 400;

function setup() {
  createCanvas(1300, 800);
}

function draw() {
  background(255);
  x = mouseX;
  y = mouseY;
  strokeWeight(20);
  line(x, y, x-75, y +100);
  line(x, y, x, y + 150);
  
  line(x, y, x + 75, y + 100);
  strokeWeight(6);
  fill(255);
  ellipse(x, y, 180, 180);
  fill(93, 155, 182);
  ellipse(x, y, 100, 100);
  fill(0);
  ellipse(x, y, 25, 25);
}
