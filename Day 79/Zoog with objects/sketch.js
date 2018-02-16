var myZoog;
var myZoog1;
var myZoog2;
var myZoog3;

function setup() {
  createCanvas(1300, 800);
  //Initialize Zoog object
  myZoog = new Zoog(500, 400);
  myZoog1 = new Zoog(1000, 400);
  myZoog2 = new Zoog(width/2 + 100, height/10 + 100);
  myZoog3 = new Zoog(width/2 + 100, height *0.8, 400);
}

function draw() {
  background(255);
  //Operate Zoog objects
  myZoog.display();
  myZoog1.display();
  myZoog2.display();
  myZoog3.display();
}

function Zoog(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;

  this.display = function () {
    strokeWeight(20);
    //left leg
    line(this.x, this.y, this.x-75, this.y+100);
    //middle leg
    line(this.x, this.y, this.x, this.y + 150);
    //right leg
    line(this.x, this.y, this.x + 75, this.y + 100);
    //outer eyeball
    strokeWeight(6);
    fill(255);
    ellipse(this.x, this.y, 180, 180);
    //inner eyeball
    fill(93, 155, 182);
    ellipse(this.x, this.y, 100, 100);
    fill(this.x, 0, this.y);
    //pupil
    ellipse(this.x, this.y, 25, 25);
    strokeWeight(20);
  };
}
