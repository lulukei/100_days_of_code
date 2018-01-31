diameter = 600;
colour = 255;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  while (diameter >= 20 ){
    fill(0, 0, colour);
    ellipse(width/2, height/2, diameter, diameter);
    diameter = diameter - 50;
    colour = colour - 25;


  }

}
