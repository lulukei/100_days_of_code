function setup() {
  createCanvas(1300, 800);
  frameRate(30);
}

function draw() {
  background(255);

  //left leg
  line(mouseX, mouseY, pmouseX-75, pmouseY+100);

  //middle leg
  line(mouseX, mouseY, pmouseX, pmouseY + 150);

  //right leg
  line(mouseX, mouseY, pmouseX + 75, pmouseY + 100);

  //outer eyeball
  strokeWeight(6);
  fill(255);
  ellipse(mouseX, mouseY, 180, 180);

   //inner eyeball
  fill(93, 155, 182);
  ellipse(mouseX, mouseY, 100, 100);
  fill(mouseX, 0, mouseY);

  //pupil
  ellipse(mouseX, mouseY, 25, 25);
  strokeWeight(20);

  if (mouseIsPressed){
    textSize(30);
    text("Take me to your leader!", mouseX + 100, mouseY-50);
  }

}
