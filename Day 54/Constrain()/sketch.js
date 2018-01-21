var x = 0;
var y = 0;

function setup(){
  createCanvas(800, 800);
}

function draw(){
  fill(0);
  rect(x, y, 40, 40);
  x = x + 1 ;
  y =  y + 1 ;
  x = constrain(x, 0, 800);
  y = constrain(x, 0, 800);

}
