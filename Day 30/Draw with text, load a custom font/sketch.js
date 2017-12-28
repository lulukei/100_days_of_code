function setup() {
  createCanvas(1300, 800);
  textFont("Oswald");
  noStroke();
}

function draw() {
  fill(144, 193, 212);
  rect(0, 0, 650, 800);
  fill(209, 163, 142);
  rect(650, 0, 650, 800);
  text("Théorie", 435, 350);
  text("Correspon", 355, 450);
  fill(144, 193, 212);
  text("des", 670, 350);
  text("dances", 670, 450);
  textSize(75);
}
