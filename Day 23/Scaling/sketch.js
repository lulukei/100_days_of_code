var x = 90

function setup() {
  createCanvas(2000, 2800);
  noStroke();
  background(29, 27, 90);
}

function draw() {
  scale(2);
  //neck
  strokeWeight(1);
  stroke(140, 101, 211);
  line(x, 105, x, 150);
  line(x+5, 105, x+5, 150);
  line(x+10, 105, x+10, 150);

  //head
  noStroke()
  fill(101, 168, 196);
  ellipse(x+5, 100, 70, 70); //head
  fill(206, 226, 234);
  ellipse(x+15, 90, 20, 20); //eyeball
  fill(0)
  ellipse(x+20, 90, 5, 5); //pupil
  stroke(140, 101, 211);
  line(x+20, 67, x+35, 20);
  line(x+20, 67, x+35, 50);
  line(x+20, 67, x+35, 60);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(2);
  stroke(245, 183, 49);
  arc(x-30, 110, 12, 9, 0, PI+HALF_PI); //bigearring
  arc(x-30, 99, 10, 7, 0, PI+HALF_PI); //bigearring
  arc(x-29, 90, 8, 5, 0, PI+HALF_PI); //bigearring

  //arc(55, 105, 13, 13, 0, PI+HALF_PI) //bignoserring
  //arc(56, 90, 9, 9, 0, PI+HALF_PI) //smallnoserring


  //body
  noStroke();
  fill(101, 168, 196);
  rect(x-35, 150, 70, 80); //mainbodypart
  strokeWeight(3);
  stroke(245, 40, 211);
  strokeCap(SQUARE);
  stroke(140, 101, 211);
  line(x-35, 160, x+34, 160);
  noStroke();
  fill(9, 74, 126);
  ellipseMode(CENTER);
  fill(140, 101, 211);
  arc(x, 230, 40, 40, 0, PI);
}
