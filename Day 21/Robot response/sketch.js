
var x = 100;
var y = 210;
var bodyheight = 80;
var neckheight = 15;
var radius = 35;
var easing = 0.02;
ellipseMode(RADIUS)

 function setup() {
   createCanvas(200, 280);
   noStroke();
 }

 function draw() {
   background(29, 27, 90);

   var targetX = mouseX;
   x += (targetX - x) * easing;

   if (mouseIsPressed) {
     neckheight = 5;
     bodyheight = 20;
 } else {
     neckheight = 15;
     bodyheight = 80;
 }

 var ny = y - bodyheight - neckheight - radius;

   //neck
   strokeWeight(1);
   stroke(140, 101, 211);
   line(x, ny, x, y - bodyheight);
   line(x+5, ny, x+5, y - bodyheight);
   line(x+10, ny, x+10, y - bodyheight);

   //head
   noStroke();
   fill(101, 168, 196);
   ellipseMode(RADIUS);
   ellipse(x+5, ny, radius, radius); //head
   ellipseMode(CENTER);
   fill(206, 226, 234);
   ellipse(x+15, y-140, 20, 20); //eyeball
   fill(0);
   ellipse(x+20, y-140, 5, 5); //pupil
   stroke(140, 101, 211);
   line(x+20, y-163, x+35, y-210);
   line(x+20, y-163, x+35, y-180);
   line(x+20, y-163, x+35, y-170);
   ellipseMode(CENTER);
   noFill();
   strokeWeight(2);
   stroke(245, 183, 49);
   arc(x-30, y-120, 12, 9, 0, PI+HALF_PI); //bigearring
   arc(x-30, y-131, 10, 7, 0, PI+HALF_PI); //bigearring
   arc(x-29, y-140, 8, 5, 0, PI+HALF_PI); //bigearring

  //body
   noStroke();
   fill(101, 168, 196);
   rect(x-35, y-80, 70, 80); //mainbodypart
   strokeWeight(3);
   stroke(245, 40, 211);
   strokeCap(SQUARE);
   stroke(140, 101, 211);
   line(x-35, y-70, x+34, y-70);
   noStroke();
   fill(9, 74, 126);
   ellipseMode(CENTER);
   fill(140, 101, 211);
   arc(x, y, 40, 40, 0, PI);
 }
