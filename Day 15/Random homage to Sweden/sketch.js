function setup() {
  createCanvas(800, 600);
  strokeWeight(100);
}

function draw() {
    if (mouseIsPressed) {

      //Swedish flag
      if (mouseButton == LEFT) {
          background(52, 104, 191);
          stroke(234, 193, 43);
          line(0, 0.50*height, width, 0.50*height);
          line(0.37*width, 0, 0.37*width, height);

      //Norwegian flag
      } if (mouseButton == RIGHT) {
          background(206, 15, 27); //red background
          stroke(255); //white cross
          strokeWeight(100);
          line(0, 0.50*height, width, 0.50*height);
          line(0.37*width, 0, 0.37*width, height);
          stroke(15, 27, 126); //blue cross
          strokeWeight(75);
          line(0, 0.50*height, width, 0.50*height);
          line(0.37*width, 0, 0.37*width, height);

      //Finnish flag
      } if (mouseButton == CENTER) {
          background(255); //white backgound
          stroke(15, 27, 126); //blue cross
          strokeWeight(100);
          line(0, 0.50*height, width, 0.50*height);
          line(0.37*width, 0, 0.37*width, height);

      } else {
      //Danish flag
          background(206, 15, 27); //red background
          stroke(255); //white cross
          strokeWeight(100);
      }
      line(0, 0.50*height, width, 0.50*height);
      line(0.37*width, 0, 0.37*width, height);
    }
}
