function setup() {
  createCanvas(1300, 800);
}

function draw () {
  var i = 0;
  while (i < width) {
  var distance = abs(mouseX-i)
  fill(distance);
  rect(i, 0, 10, height);
  i = i + 10;
  }
}
