var x = 32.5;
var y = 100.5;
var bodyheight = 37.5;
var neckheight = 10;
var radius = 15;
var ny = - bodyheight - neckheight - radius;
easing = 0.04;

function setup(){
  createCanvas(180, 110);
  ellipseMode(RADIUS);
  background(29, 27, 90);
}

function draw(){

  var targetX = mouseX;
  x += (targetX - x) * easing;

  background(29, 27, 90); //scalindg down by half when pressing the mouse
  translate(mouseX, y);
  if(mouseIsPressed){
    scale(0.5);
  } else {
    scale(1.0);
  }

  //body
  noStroke();
  fill(140, 101, 211);
  ellipse(x, -7.5, 7.5, 7.5);
  noStroke();
  fill(101, 168, 196);
  rect(x-12.5, -bodyheight, 25, bodyheight-7.5);

  //neck
  stroke(140, 101, 211);
  line(x+2.5, -bodyheight, x+2.5, ny);

  //hair
  push();
  translate(x, ny);
  var angle = -PI/20;
  for (var i = 0; i <= 20; i++) {
    stroke(140, 101, 211);
    strokeWeight(0.75);
    line(0, 0, 30, 0);
    rotate(angle);
  }
  pop();

  //head
  noStroke();
  ellipse(x, ny, radius, radius);
  stroke(0);
  strokeWeight(0.5);
  fill(255);
  ellipse(x+7.5, ny-5, 2.5, 2.5);
  fill(0);
  strokeWeight(0.5);
  ellipse(x+7.5, ny-5, 0.5, 0.5);
}
