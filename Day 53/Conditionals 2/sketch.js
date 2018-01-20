function setup() {
  createCanvas(1300, 800);
}

function draw(){

  var grade = random(0, 100);

  if (grade >= 80) {
    print("Assign letter grade A");

  } else if (grade >= 60){
    print("Assign letter grade B");

  } else if (grade >= 40){
      print("Assign letter grade C");

  } else if (grade >= 20){
        print("Assign letter grade D");

  } else {
      print("FAIL");
  }
}
