function setup() {
  createCanvas(1300, 800);
  textFont("Oswald");
}

function draw() {
  noStroke();
  fill(144, 193, 212);
  rect(0, 0, 650, 800);
  fill(209, 163, 142);
  rect(650, 0, 650, 800);
  stroke(0);
  text("Théorie Correspon", 360, 200, 200, 500);
  // text("Correspon", 355, 450);
  fill(144, 193, 212);
  text("des dances et des bois", 670, 200, 100, 800);
  // text("dances", 670, 450);
  textSize(75);
}
