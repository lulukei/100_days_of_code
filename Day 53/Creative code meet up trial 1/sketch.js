
function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw(){
  fill(255, 0, 0);
  var numberOfBars = 16,
    barIndex;

  for (barIndex = 0; barIndex < numberOfBars; barIndex++) {
    drawBar(barIndex, numberOfBars);
  }
}


function drawBar(barIndex, numberOfBars) {
  var margin = width/10;
  var barWidth = (width-margin*2)/numberOfBars;
  var x = margin + barIndex * barWidth;
  var y = 0;
  barHeight = height;
  rect(x, y, barWidth, barHeight);
}
