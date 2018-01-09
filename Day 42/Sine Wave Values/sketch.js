var angle = 0.0;

function setup(){
  createCanvas(1300, 800);
  frameRate(60);
}

function draw(){
  var sinval = sin(angle);
  print(sinval);
  gray = map(sinval, -1, 1, 0, 255);
  background(gray);
  angle += 0.1;

}
