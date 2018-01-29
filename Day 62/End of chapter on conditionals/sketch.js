var x = 0;
var y = 2;
var state = 0;
var speedx = 10;
var speedy = 10;
var r = 93;
var g = 155;
var b = 182;
var colourChangeR = 1;
var colourChangeG = 1;
var colourChangeB = 1;


function setup() {
  createCanvas(1300, 800);
  frameRate(1000);
}

function draw() {
  background(255);

  //left leg
  line(x, y, x-75, y+100);

  //middle leg
  line(x, y, x, y + 150);

  //right leg
  line(x, y, x + 75, y + 100);

  //outer eyeball
  strokeWeight(6);
  fill(255);
  ellipse(x, y, 180, 180);

   //inner eyeball
  r = r + colourChangeR;
  g = g + colourChangeG;
  b = b + colourChangeB;

  if (r < 93 || r > 255) {
    colourChangeR = colourChangeR*-1;
  }

  if (g < 155 || g > 255) {
    colourChangeG = colourChangeG*-1;
  }

  if (b < 182 || b > 255){
    colourChangeB = colourChangeB*-1;
  }


  fill(r, g, b);
  ellipse(x, y, 100, 100);
  fill(x, 0, y);

  //pupil
  ellipse(x, y, 25, 25);
  strokeWeight(20);

  x = x + speedx;
  y = y + speedy;

  if (y > height || y < 0) {
    speedy = speedy *-1;
  }

  if (x> width || x < 0) {
    speedx = speedx *-1;
  }

}
