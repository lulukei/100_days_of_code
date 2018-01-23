var x = 50;
var y = 50;
var w = 100;
var h = 100;

function setup() {
  createCanvas(1300, 800);
}

function draw() {
  background(255);
  fill(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  //The left sqare turns black when the mouse hovers over it
  if (mouseX >= 0 && mouseX <= width/2 && mouseY >= 0 && mouseY <= height/2) {
    rect(0, 0, width/2, height/2);
  //The right bottom sqare turns black when the mouse hovers over it
  } else if (mouseX >= width/2 && mouseX <= width && mouseY >= height/2 && mouseY <= height) {
    rect(width/2, height/2, width/2, height/2);
  //The left botton square turns black when the mouse hovers over it
  } else if (mouseX >= 0 && mouseX <= width/2 <= width && mouseY >= height/2 && mouseY <= height) {
    rect(0, height/2, width/2, height/2);
  //The right upper sqare turns black when the mouse hovers over it
  } else if (mouseX >= width/2 && mouseX <= width && mouseY >= 0, mouseY <= height/2) {
    rect(width/2, 0, width/2, height/2);
  }
}
