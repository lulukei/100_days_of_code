
var easing = 0.2;
var x = 0.0;
var y = 0.0;
var px = 0.0;
var py = 0.0;

function setup() {
	createCanvas(800, 600);
	fill(255, 201, 107, 100);
	background(255, 164, 107);
	stroke(0, 120);
}

function draw() {
	var targetX = mouseX;
	x += (targetX - x) * easing;
	var targetY = mouseY;
	y += (targetY - y) * easing;
	var weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
	px = x;
	py = y;
}
