var bot1;
var bot2;
var bot3;
var landscape;
var square;

var easing = 0.05;
var offset = 0;

// Preload the images
function preload() {
  bot1 = loadImage("robot1.svg");
  bot2 = loadImage("robot2.svg");
  bot3 = loadImage("robot3.svg");
  landscape = loadImage("berghain.jpg");
  // square = loadImage("square.png")
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  // Set the background to the "landscape" image; this image
  // must be the same width and height as the program
  background(landscape);

  // Set the left/right offset and apply easing to make
  // the transition smooth
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;

  // Draw the left robot
  image(bot1, 85 + offset, 65);

  // Draw the right robot smaller and give it a smaller offset
  var smallerOffset = offset * 0.7;
  image(bot2, 510 + smallerOffset, 140, 78, 248);

  // Draw the smallest robot, give it a smaller offset
  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);

  // point(40, 40);
  // stroke(67, 345, 29);
  // strokeWeight(23);
  // // point(80, 40);
  // // stroke(67, 345, 29);
  // // strokeWeight(1);
  // // // line(85, 0, 85, height);
  // // // line(45, 0, 45, height);
  // // // line(125, 0, 125, height);
  // // // line(510, 0, 510, height);
  // // // line(482, 0, 482, height);
  // // // line(538, 0, 538, height);
  // // // line(410, 0, 410, height);
  // // // line(430, 0, 430, height);
  // // // line(390, 0, 390, height);
  // image(square, 40, 60);

}
