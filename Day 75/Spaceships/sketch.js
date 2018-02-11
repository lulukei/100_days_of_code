
function setup() {
  createCanvas(700, 400);
  frameRate(30);
}

function draw() {
  background(255, 151, 54);
  spaceShip(482, 159, 223, random(255), random(255), random(255));
  spaceShip(126, 89, 93, random(255), random(255), random(255));
  spaceShip(422, 286, 84, random(255), random(255), random(255));
  spaceShip(294, 49, 48, random(255), random(255), random(255));
  spaceShip(162, 220, 151, random(255), random(255), random(255));
}

function spaceShip(x, y, size, r, g, b, i) {
  noStroke();
  fill(r, g, b);
  //body
  ellipse(x + size*1/4, y, size, size/3);
  //hublot
  ellipse(x + size*1/4, y-size*0.07, size*0.38, size*0.38);
  fill(255);
  //windows
    ellipse(x, y, size*0.11, size*0.11);
    ellipse(x+size*1/4, y, size*0.11, size*0.11);
    ellipse(x+size*1/2, y, size*0.11, size*0.11);
}
