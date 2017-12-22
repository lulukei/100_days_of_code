
function setup(){
  createCanvas(1300, 800);
  background(32, 82, 133);
}

function draw() {
  translate(mouseX, mouseY);
  scalar = mouseX/650;
  scale(scalar);
  if (scalar > 0){
    strokeWeight(1.0/scalar);
  } else {
    strokeWeight(0);
  }
  rect(-15, -15, 30, 300);
}
