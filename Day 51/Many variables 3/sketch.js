rectX = 100;
rectY = 100;
rectWidth = 1100;
rectHeight = 600;
circleX = 650;
circleY = 400;
circleWidth = 200;
circleHeight = 200;

function setup() {
  createCanvas(1300, 800);
  frameRate(30);
}

function draw(){
  fill(125);
  rect(rectX, rectY, rectWidth, rectHeight);
  rectHeight-=1;
  fill(255);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleWidth+=1;
  circleHeight-=1;
}
