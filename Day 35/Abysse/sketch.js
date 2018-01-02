var x = 200;
var speed = 5;
var direction = 1;
var img1;
var img2;

function preload() {
  img1 = loadImage("abysse1.png")
  img2 = loadImage("abysse2.png")
}

function setup(){
  createCanvas(1300, 800);
}

function draw() {
  background(0);
  x += speed * direction;
  if ((x > 1000 || x <  200)) {
    direction = -direction;
  }

  if (direction == 1) {
    image(img1, x, 250, 300, 300);

  } else {
    image(img2, x, 250,  300, 300);
  }

}
