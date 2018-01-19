var x;
var y;
var rEye;
var gEye;
var bEye;

function setup() {
  createCanvas(1300, 800);
}

function draw() {

  translate(mouseX, mouseY);
  background(255);

  //left leg
  line(0, 0, -75, 100);

  //middle leg
  line(0, 0, 0, 150);

  //right leg
  line(0, 0, +75, 100);

  //outer eyeball
  strokeWeight(6);
  fill(255);
  ellipse(0, 0, 180, 180);

   //inner eyeball
   rEye = random(0, 255);
   gEye = random(0, 255);
   bEye = random(0, 255);
   fill(rEye, gEye, bEye);
   ellipse(0, 0, 100, 100);

  //pupil
    fill(0);
    ellipse(0, 0, 25, 25);
    strokeWeight(20);
}
