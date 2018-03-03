var words = ["Your", "dad", "plays", "the", "org"];
var index = 0;

function setup () {
  createCanvas(800, 600);
}

function draw () {
  background(0)
  fill(255);
  textSize(100);
  for (var i = 0; i < 5; i ++){
    text(words[i], i*100 + 100, i*100 + 100);
    fill(1 + i*100, 10 + i*100, 100 + i*100);

  }
}
