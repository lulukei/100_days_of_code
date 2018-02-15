var myBall;
var myBall2;
var myBall3;
var myBall4;
var myBall5;
var myBall6;
var myBall7;
var myBall8;

function setup() {
  createCanvas(1000, 600);
  //Initialize my Ball object
  myBall = new Ball(width/2, 0, 20, 20, 1, 0.3, 0);
  myBall2 = new Ball(width/4, 100, 20, 20, 1, 0.3, 0);
  myBall3 = new Ball(width/8, 60, 20, 20, 1, 0.3, 0);
  myBall4 = new Ball(width/6, 0, 20, 20, 1, 0.3, 0);
  myBall5 = new Ball(width/0.5, 30, 20, 20, 1, 0.3, 0);
  myBall6 = new Ball(width-100, 0, 20, 20, 1, 0.3, 0);
  myBall7 = new Ball(width-50, 30, 20, 20, 1, 0.3, 0);
  myBall8 = new Ball(width-300, 30, 20, 20, 1, 0.3, 0);
}

function draw() {
  background(255, 127, 80);
  myBall.bounce();
  myBall.display();
  myBall2.bounce();
  myBall2.display();
  myBall3.bounce();
  myBall3.display();
  myBall4.bounce();
  myBall4.display();
  myBall5.bounce();
  myBall5.display();
  myBall6.bounce();
  myBall6.display();
  myBall7.bounce();
  myBall7.display();
  myBall8.bounce();
  myBall8.display();
}

function Ball (tempX, tempY, tempRadius, tempRadius, tempSpeed, tempGravity, tempC) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    this.speed = tempSpeed;
    this.gravity = tempGravity;
    this.c = tempC;

  // Draw ball1
  this.display = function() {
      noStroke();
      fill(0, 0, 0, 100)
      ellipse(this.x, this.y, this.radius, this.radius);
  }

  //Set up ball gravity
  this.bounce = function () {
    this.y = this.y + this.speed;
    this.speed = this.speed + this.gravity;
  //Make the ball bounce
    if (this.y > height) {
    this.speed = this.speed * -0.95;
    this.y = height;
    }
  }
}
