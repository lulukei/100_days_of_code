function setup() {
  createCanvas(200, 280);
  noStroke();
  background(29, 27, 90);
}

function draw() {
  //neck
  strokeWeight(1);
  stroke(140, 101, 211);
  line(85, 105, 85, 150);
  line(90, 105, 90, 150);
  line(95, 105, 95, 150);

  //head
  noStroke();
  fill(101, 168, 196);
  ellipse(90, 100, 70, 70); //head
  fill(206, 226, 234);
  ellipse(100, 90, 20, 20); //eyeball
  fill(0)
  ellipse(105, 90, 5, 5); //pupil
  stroke(140, 101, 211);
  line(105, 67, 120, 20);
  line(105, 67, 120, 50);
  line(105, 67, 120, 60);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(2);
  stroke(245, 183, 49);
  arc(55, 110, 12, 9, 0, PI+HALF_PI); //big arring
  arc(55, 99, 10, 7, 0, PI+HALF_PI); //middle size earring
  arc(56, 90, 8, 5, 0, PI+HALF_PI); //small earring

  //arc(55, 105, 13, 13, 0, PI+HALF_PI) //big nose ring
  //arc(56, 90, 9, 9, 0, PI+HALF_PI) //small nose ring


  //body
  noStroke();
  fill(101, 168, 196);
  rect(50, 150, 70, 80); //mainbodypart
  strokeWeight(3);
  stroke(245, 40, 211);
  strokeCap(SQUARE);
  stroke(140, 101, 211);
  line(50, 160, 119, 160);
  noStroke();
  fill(9, 74, 126);
  ellipseMode(CENTER);
  fill(140, 101, 211);
  arc(85, 230, 40, 40, 0, PI);
}
