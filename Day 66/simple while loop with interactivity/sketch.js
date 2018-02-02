function setup() {
  createCanvas(1300, 800);
}

function draw () {
  for (var i = 0 ; i < width ; i += 10) {
  var distance = abs(mouseX-i)
  fill(distance);
  rect(i, 0, 10, height);
  }
}
