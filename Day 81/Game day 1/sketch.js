function setup() {
  createCanvas(700, 400);
  mySpaceShip = new spaceShip(width*0.33, height*0.55, 153, 0);
  mySpaceShip2 = new spaceShip(width*0.21, height*0.70, 100, 100);
  mySpaceShip3 = new spaceShip(width*0.23, height*0.45, 80, 300);
  myZoog = new Zoog(width*0.69, height*0.60, 0);
}

function draw() {
  background(0, 0, 153);
  mySpaceShip.display();
  mySpaceShip.moveUpDown();
  mySpaceShip2.display();
  mySpaceShip2.moveUpDown();
  mySpaceShip3.display();
  mySpaceShip3.moveUpDown();
  myZoog.display();
  myZoog.moveUpDown();
  fill(255);
  textSize(46);
  textFont('Andale Mono')
  text("ZOOG VS. SPACESHIPS", width*0.12, height*0.25)
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
    this.y = this.y + sin(this.angle)/2;
    this.angle = this.angle + 0.1;
  }
}

function Zoog(tempX, tempY, tempAngle) {
  this.x = tempX;
  this.y = tempY;
  this.angle = tempAngle;


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
    ellipse(this.x, this.y, 180, 120);

     //inner eyeball
     fill(40, 241, 255);
     ellipse(this.x, this.y, 100, 100);

    //pupil
      fill(0);
      ellipse(this.x, this.y, 25, 25);
      strokeWeight(20);
  }
    // moves up and down
    this.moveUpDown = function () {
      this.y = this.y + sin(this.angle)/2;
      this.angle = this.angle + 0.1;
  }
}
