
function wdw(tempX, tempY, tempSize, tempAngle) {
  this.x = tempY;
  this.y = tempY;
  this.size = tempSize;
  this.angle = tempAngle;

  this.display = function() {
    stroke(40, 241, 255);
    strokeWeight(this.size/8.5);
    point(this.x, this.y);

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
