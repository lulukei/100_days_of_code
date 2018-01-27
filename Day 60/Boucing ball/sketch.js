start = false;
var x = 0;
var y = 0;
var radius = 60
var speed = 2;
var r = 240;
var g = 20;
var b = 100;

function setup() {
  createCanvas(1300, 800);
}

function draw() {

  // Après le lancement faire avancer l'ellipse en diagonale et change the colour
  // at each frame
  if (start == true) {
    x = x + speed;
    y = y + speed;
    r = r + 1;
    g = g + 1;
    b = b + 1;
  }

  // Augment radius at 4th of the screen
  if (x > width/4 && y > height/4) {
    radius = radius + 0.2;
    } else {
    radius = radius;
  }

  // Slow down ball at 4th of the screen
  if (x > width/4 && y > height/4) {
    speed = speed*0.9999;
  }

  // Make the ball bounce back at the edges
  if (x < 0 || x > width || y < 0 || y > height) {
  speed = speed * -1 ;
  }

  // Make the ball bounce back at the edges
  if (x < 0 || x > width || y < 0 || y > height) {
  r = r * -0.1 ;
  g = g * -0.1;
  b = b * -0.1 ;
  }

  //Draw an ellipse
  ellipse(x, y, radius, radius);
  fill(r, g, b);

}

function mousePressed(){
  start = true;
}
