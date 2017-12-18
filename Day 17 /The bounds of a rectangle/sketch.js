var x = 250;
var y = 150;
var w = 300;
var h = 300;

function setup() {
    createCanvas(800, 600);
    noStroke();
}

function
 draw(){
    background(119, 27, 126);
    if ((mouseX > x) && (mouseX < x + w) &&
        (mouseY > y) && (mouseY < y + h)) {
      fill(232, 215, 63);
    } else {
      background(232, 215, 63);
      fill(119, 27, 126);
  }
    rect(x, y, w, h);
}
