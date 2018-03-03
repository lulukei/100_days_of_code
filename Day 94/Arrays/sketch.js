var words = ["Your", "dad", "plays", "the", "org"];
var index = 0;

function setup () {
  createCanvas(800, 600);
}

function draw () {
  background(0)
  fill(255);
  textSize(100);
  text(words[index], width*0.2, height/2);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}
