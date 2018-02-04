
function setup() {
  createCanvas(1300, 800);
}

function draw() {


  background(255);

  // Legs
  strokeWeight(20);
  line(mouseX, mouseY, mouseX*0.9, mouseY*1.25);
  line(mouseX, mouseY, mouseX, mouseY*1.25);
  line(mouseX, mouseY, mouseX*1.09, mouseY*1.25);

  //Body
  strokeWeight(6);
  fill(255);
  for (i = 180; i > 90; i += -20) {
    ellipse(mouseX, mouseY, i, i);
  }
  fill(93, 155, 182);
  ellipse(mouseX, mouseY, 100, 100);
  fill(0);
  ellipse(mouseX, mouseY, 25, 25);

  // Zoog describes the state of its legs

  if (mouseX < width/12 && mouseY < height/5) {
  text('Aaargh, my legs melted together and disapeared!!', mouseX + 100, mouseY + 100);
  textSize(20);

  } else if (mouseY < height/5) {
  text('Aaargh, my legs disapeared!!', mouseX + 100, mouseY + 100);
  textSize(20);


} else if (mouseX < width/12) {
  text('Aaargh, my legs melted together!!', mouseX + 100, mouseY + 100);
  textSize(20);
  }
}
