var easing = 0.1;
var x = 800.0;
var y = 800.0;
var px = 10.0;
var py = 10.0;

function setup() {
    createCanvas(800, 600);
    fill(255, 201, 107, 100);
    background(255, 164, 107);
    stroke(0, 120);
}

function draw() {
    targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y)* easing;
    line(x, y, px, py);
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    px = x;
    py = y;
}
