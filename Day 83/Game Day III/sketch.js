function setup() {
  createCanvas(700, 400);
  mySpaceShip = new spaceShip(width*0.13, height*0.25, 153, 100);
  mySpaceShip2 = new spaceShip(width*0.01, height*0.40, 100, 150);
  mySpaceShip3 = new spaceShip(width*0.25, height*0.60, 80, 360);
  myZoog = new Zoog (width-400, height/2, 50);
}

function draw() {
  background(0, 0, 153);
  mySpaceShip.display();
  mySpaceShip.moveUpDown();
  mySpaceShip.moveForward();
  mySpaceShip.startAgain();
  mySpaceShip2.display();
  mySpaceShip2.moveUpDown();
  mySpaceShip2.moveForward();
  mySpaceShip2.startAgain();
  mySpaceShip3.display();
  mySpaceShip3.moveUpDown();
  mySpaceShip3.moveForward();
  mySpaceShip3.startAgain();
  myZoog.display();
  myZoog.navigate();


  // myZoog.display();
  // myZoog.moveUpDown();
}

function spaceShip(tempX, tempY, tempSize, tempAngle) {
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.angle = tempAngle;

  this.display = function () {
  //SPACESHIP
    ellipse(this.x, this.y, this.size*0.11, size*0.11);
    ellipse(this.x+this.size*1/4, this.y, this.size*0.11, this.size*0.11);
    ellipse(this.x+this.size*1/2, this.y, this.size*0.11, this.size*0.11);
    noStroke();
    fill(155, 40, 255);
    //body
    ellipse(this.x + this.size*1/4, this.y, this.size, this.size/3.4);
    //hublot
    ellipse(this.x + this.size*1/4, this.y-this.size*0.07, this.size*0.4, this.size*0.38);
    fill(40, 241, 255);
    //windows
    ellipse(this.x, this.y, this.size*0.11, size*0.11);
    ellipse(this.x, this.y, this.size*0.11, this.size*0.11);
    ellipse(this.x+this.size*1/4, this.y, this.size*0.11, this.size*0.11);
    ellipse(this.x+this.size*1/2, this.y, this.size*0.11, this.size*0.11);
  }

  this.moveUpDown = function () {
    // moves up and down
    this.y = this.y + sin(this.angle)*4;
    this.angle = this.angle + random (-0.01, 0.1);
  }

  this.moveForward = function () {
    //the space ship moves forward
    this.x = this.x + 2;
  }
  //starts again
   this.startAgain = function () {
     if (this.x > width) {
       this.x = 0;
     }
  }
}

function Zoog(tempX, tempY, tempSize) {
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;

//Showing Zoog
  this.display = function () {
    //left leg
    line(this.x, this.y, this.x-75, this.y+100);

    //middle leg
    line(this.x, this.y, this.x, this.y + 150);

    //right leg
    line(this.x, this.y, this.x + 75, this.y + 100);

    //outer eyeball
    strokeWeight(6);
    fill(255);
    ellipse(this.x, this.y, this.size, this.size/1.5);

     //inner eyeball
     fill(40, 241, 255);
     ellipse(this.x, this.y, this.size/1.8, this.size/1.8);

    //pupil
      fill(0);
      ellipse(this.x, this.y, this.size/7.2, this.size/7.2);
      strokeWeight(20);
  }
// Navigating Zoog
  this.navigate = function() {

      if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;

    } if (keyIsDown(RIGHT_ARROW)) {
        this.x += 10;

    }  if (keyIsDown(DOWN_ARROW)) {
        this.y += 10;

    }  if (keyIsDown(UP_ARROW)) {
        this.y -= 10;

    } if (this.x > width) {
        this.x = width;

    } if (this.x < 0) {
        this.x = 0;

    } if (this.y > height) {
        this.y = height;

    } if (this.y < 0) {
        this.y = 0;
    }
  }
}
