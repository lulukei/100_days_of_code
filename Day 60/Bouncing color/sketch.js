var c1 = 255;
var c2 = 0;
var c1Change = -1;
var c2Change = 1;

function setup() {
  createCanvas(800, 600);
}

function draw(){
  //Draw rectangle 1
  rect(0, 0, width/2, height);
  fill(c1, 0, c2);
  noStroke();

  //Draw rectangle 2
  rect(width/2, 0, width, height);
  fill(c2, 0, c1);

  //Colour change
  c1 = c1 + c1Change;
  c2 = c2 + c2Change;

  //Change direction of colour
  if (c1 < 0 || c1 > 255) {
    c1Change *= - 1;

  if (c2 < 0 || c2 > 255);
    c2Change *= - 1;
  }
}
