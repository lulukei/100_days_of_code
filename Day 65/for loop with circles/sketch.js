var endY;

function setup() {

createCanvas(200, 200);

 frameRate(5);

 endY = 10;

}

function draw() {

 background(0);

 for (var y = 10; y < endY; y += 10) {

  stroke(255);

  line(0, y, width, y);

 }

 endY = endY + 10;

}
