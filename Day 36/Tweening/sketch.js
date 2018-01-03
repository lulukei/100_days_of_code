var startX = 20;
var stopX = 1000;
var startY = 30;
var stopY = 400;
pct = 0.0;
step = 0.005;
var img1;

function preload() {
  img1 = loadImage("abysse1.png")
}

function setup(){
  createCanvas(1300, 800);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }


//  else {
//     x = stopX - ((stopX-startX) * -pct);
//     y = stopY - ((stopY-startX) * -pct);
//     pct = step;
//
//   }
    image(img1, x, y, 300, 300);
}
