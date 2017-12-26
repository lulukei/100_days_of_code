var img1;
var img2;
var img3;

function preload() {
  img1 = loadImage("preraphaelite1.jpg")
  img2 = loadImage("preraphaelite2.jpg")
  img3 = loadImage("preraphaelite3.jpg")
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  image(img2, 200, 0, 800, 600);
  image(img3, 750, 0, 626*1+(1/5), 879*1+(1/5));
  image(img1, -190, 0);
}
