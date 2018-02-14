circleX = 100;
circleY = 100;
circleX2 = 700;
circleY2 = 100;
circleX3 = 100;
circleY3 = 700;
circleX4 = 700;
circleY4 = 700;
circleWidth = 100;
circleHeight = 100;

function setup() {
  createCanvas(1300, 800);
  frameRate(30);
}

function draw(){
  fill(120);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleX += 1;
  circleY -= 1;
  ellipse(circleX2, circleY2, circleWidth, circleHeight);
  circleX2 += 1;
  circleY2 -= 1;
  ellipse(circleX3, circleY3, circleWidth, circleHeight);
  circleX3 += 1;
  circleY3 -= 1;
  ellipse(circleX4, circleY4, circleWidth, circleHeight);
  circleX4 += 1;
  circleY4 -= 1;
  circleWidth += 1;
  circleHeight += 3;
}
