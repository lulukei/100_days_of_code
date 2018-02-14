Car myCar;

function setup() {
  createCanvas(200, 200);
  //Initialize car object
  myCar = newCar();
}

function draw() {
  background(255);
  // Operate Car object.
  myCar.move();
  myCar.display();
}

class Car {
  color c;
  var xpos;
  var ypos;
  var xspeed;

  Car() {
    c = color(0);
    xpos = width/2;
    ypos = height/2;
    xspeed =1;
  }

  function display() {
    // The car is just a square
    rectMode(CENTER);
    fill(c);
    rect(xpos, ypos, 20, 10);
  }

  function move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}
