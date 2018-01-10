var angle = 0.0;
var angle2 = 0.0;
var scalar = 130;
var offset = 500;
var offset2 = 300;
var speed = 0.2;
var speed2 = 0.3;
var radius = 40;
var radius2 = 4;

function setup(){
  createCanvas(1300, 800);
  ellipseMode(RADIUS);
  noStroke();
  frameRate(30);
}

function draw(){
  background(255, 153, 153);
  y1= offset + sin(angle) * scalar
  y2= offset + sin(angle+ 1) * scalar
  y3= offset + sin(angle + 2) * scalar
  y4= offset2 + sin(angle2) * scalar
  y5= offset2 + sin(angle2+ 1) * scalar
  y6= offset2 + sin(angle2 + 2) * scalar
  fill(255, 204, 229, 100);
  ellipse(150, y1, radius, radius);
  ellipse(350, y2, radius, radius);
  ellipse(550, y3, radius, radius);
  ellipse(750, y1, radius, radius);
  ellipse(950, y2, radius, radius);
  ellipse(1150, y3, radius, radius);
  fill(0, 100);
  ellipse(150, y4, radius2, radius);
  ellipse(350, y5, radius2, radius);
  ellipse(550, y6, radius2, radius);
  ellipse(750, y4, radius2, radius);
  ellipse(950, y5, radius2, radius);
  ellipse(1150, y6, radius2, radius);
  angle+= speed;
  angle2+= speed2;



}
