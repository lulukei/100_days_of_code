function setup(){
  var height_in_cms = 174;
  var height_in_feet = calculateFeet(height_in_cms);
  print(height_in_feet);
  var height_in_feet = 5.2;
  var height_in_cms = calculateCms(height_in_feet);
  print(height_in_cms);
}

function calculateFeet(h) {
  var newHeight = h * 0.032808;
  return newHeight;
}

function calculateCms(h) {
  var newHeight = h * 30.48
  return newHeight;
}
