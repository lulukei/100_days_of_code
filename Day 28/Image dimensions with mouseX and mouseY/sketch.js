var img;

function preload(){
  img = loadImage("preraphaelite1.jpg");
}

function setup(){
  createCanvas(1200, 800);
}

function draw(){
  background(255, 191, 0);
  image(img, 0, 0, mouseX*2, mouseY*2);
}
