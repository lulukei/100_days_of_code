var img;

function preload() {
  img = loadImage("network.svg");
}

function setup() {
  createCanvas(1300, 800);
}

function draw() {
  background(0);
  image(img, 0, 0, mouseX*2, mouseY*2);
}
