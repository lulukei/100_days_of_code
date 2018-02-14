function setup(){
  createCanvas(1300, 800);
  strokeWeight(20);
  strokeCap(SQUARE);
  frameRate(10);
}

function draw() {
  background(255, 140, 0);
  for (var x = 100; x < 1300; x += 100) {
    var mx = mouseX /10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx, mx);
    line(x + offsetA, 75, x - offsetB, 700);
  }
}
