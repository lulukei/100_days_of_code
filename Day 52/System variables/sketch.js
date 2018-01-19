
function setup() {
  createCanvas(650, 400);
  frameRate(30);
  ellipseMode(CENTER);
  rectMode(CENTER);
  background(123);
}

function draw(){
  rect(width/4, height/2, width/4, height/2);
  rect(width/6.5, height/2, width/24, height/16);
  rect(width/2.9, height/2, width/24, height/16);
  line(width/4-width/8, height/2-height/4, width/4+width/8, height/2+height/4);
  line(width/4-width/8, height/2+height/4, width/4+width/8, height/2-height/4);
  ellipse(width/4, height/2, width/12, height/4);




}
