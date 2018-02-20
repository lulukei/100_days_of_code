var px;
var py;

function setup() {
  createCanvas(500, 500);
  strokeWeight(30);
}

function draw() {
  background(255);
  var x2 = mouseX;
  var y2 = mouseY;
  var x1 = width/2;
  var y1 = height/2;

// Collision
  var colliding = pointPoint(x1, y1, x1, y2);
    if (colliding == true) {
      textSize(50);
      text("Boom! Collision!", 100, 200);
    }

    //diplay points
    point(x1, y1);
    point(x2, y2);

  function pointPoint(x1, y1, x1, y2) {
    if (x1 == x2 && y1 == y2) {
      return true;
    }
    return false;
  }
}
