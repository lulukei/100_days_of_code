
function setup(){
  createCanvas(1300, 800);
  background(32, 82, 133);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseX/600);
  rect(-15, -15, 30, 300);
}
