var y = 100;

function setup() {
  createCanvas(1300, 800);
}

function draw() {

  for (x = width/15; x < width - 100; x += 200) {

  // Legs
  strokeWeight(20);
  line(x, y, x*0.9, y*1.25);
  line(x, y, x, y*1.25);
  line(x, y, x*1.09, y*1.25);

  //Body
  strokeWeight(6);
  fill(255);
  ellipse(x, y, 180, 180);
  fill(93, 155, 182);
  ellipse(x, y, 100, 100);
  fill(0);
  ellipse(x, y, 25, 25);
  }
}
