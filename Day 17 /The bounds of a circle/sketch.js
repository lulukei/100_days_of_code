var x = 400;
var y = 300;
var radius = 50;

function setup () {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
}


function draw () {
    background(0);
    fill(255);
    var d = dist(mouseX, mouseY, x, y);
    if (d < radius) {
       radius+= 1;
    } else {
       radius = radius;
    }
    ellipse(x, y, radius, radius);
}
