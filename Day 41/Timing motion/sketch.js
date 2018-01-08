var img1;
var img2;
var img3;
var time1 = 2000;
var time2 = 4000;

function preload(){
  img1 = loadImage("window.png")
  img2 = loadImage("window2.png")
  img3 = loadImage("window3.png")

}

function setup(){
  createCanvas(1300, 800);
  background(0, 0, 204);
  textSize(400);
  fill(255, 255, 0);

}

function draw(){
  var currentTime = millis();
  if (currentTime > 1000) {
    text("1", 500, 500);
  }
  if (currentTime > 2000) {
    background(0, 0, 204);
    text("2", 500, 500);
  }
  if (currentTime > 3000) {
    background(0, 0, 204);
    text("3", 500, 500);
  }
  if (currentTime > 4000) {
    background(0, 0, 204);
    text("4", 500, 500);
  }
  if (currentTime > 5000) {
    background(0, 0, 204);
    text("5", 500, 500);
  }
}
