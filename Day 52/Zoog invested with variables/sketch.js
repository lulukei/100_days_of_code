var x;
var y;
var rEye;
var gEye;
var bEye;

function setup() {
  createCanvas(1300, 800);
  y = 800;
  x = width/2;
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
   rEye = random(0, 255);
   gEye = random(0, 255);
   bEye = random(0, 255);
   fill(rEye, gEye, bEye);
   ellipse(x, y, 100, 100);

  //pupil
    fill(0);
    ellipse(x, y, 25, 25);
    strokeWeight(20);

  //Zoog moves up and shakes to the left and right
  y-=1;
  x = x + random(-2, 2);

}
