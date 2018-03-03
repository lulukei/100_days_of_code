
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
