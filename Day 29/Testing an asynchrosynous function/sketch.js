function setup(){
  createCanvas(480, 120);
  loadImage("clouds.png", drawImage);
}

function draw() {
  background(233, 223, 83);
}

function drawImage(img) {
  image(img, 0, 0);
}
