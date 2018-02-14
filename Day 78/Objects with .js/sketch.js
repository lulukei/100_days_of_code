var myCar;
var myCar2;

function setup() {
  createCanvas(500, 200);
  //Initialize car object
  myCar = new Car(30, 50, 2);
  myCar2 = new Car(30, 100, 3);
}

function draw() {
  background(139);
  // Operate Car objects.
  myCar.move();
  myCar.display();
  myCar2.move();
  myCar2.display();
}

function Car(tempXpos, tempYpos, tempSpeed) {
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.speed = tempSpeed;

  this.display = function() {
    // The car is just a square
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 20, 10);
  };

  this.move = function () {
    this.xpos = this.xpos + this.speed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  };
}
