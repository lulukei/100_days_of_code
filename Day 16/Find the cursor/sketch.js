var x = 0.0

function setup() {
    createCanvas (800, 600);
    var x = width/2;
    stroke(193, 203, 49);
    strokeWeight(3);
}

function draw() {
    background(23, 106, 69);
    offset=0;
    if (mouseX > x) {
        x+= 1;
        offset = -10;

    } if (mouseX < x) {
        x+= -1;
        offset = 10;
    }

//making the direction of the arrow depend on the value of offset

    line(x, 0, x, height);
    line(mouseX, mouseY, mouseX + offset, mouseY-10);
    line(mouseX, mouseY, mouseX + offset, mouseY+10);
    line(mouseX, mouseY, mouseX+ offset*3, mouseY);
}
