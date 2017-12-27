var img;

function setup() {
  createCanvas(480, 120);
  img = loadImage("clouds.png");
}

function draw() {
    noLoop();
    background(129, 222, 102);
    image(img, 0, 0);
}
