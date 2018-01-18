x1 = 650;
y1 = 0;
x2 = 650;
y2 = 400;
x3 = 0;
y3 = 800;
x4 = 650;
y4 = 400;
x5 = 650;
y5 = 400;
x6 = 1300;
y6 = 800;

function setup() {
  createCanvas(1300, 800);
  frameRate(30);
}

function draw(){
  strokeWeight+=4;
  line(x1, y1, x2, y2);
  x1+=7;
  line(x3, y3, x4, y4);
  y4*= -2;
  line(x5, y5, x6, y6);
  x6+=2;
}
