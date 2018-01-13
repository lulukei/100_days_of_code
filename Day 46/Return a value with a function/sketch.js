function setup(){
  var height_in_cms = 174;
  var height_in_foot = calculatefoot(height_in_cms);
  print(height_in_foot);
  var height_in_foot = 5.2;
  var height_in_cms = calculateCms(height_in_foot);
  print(height_in_cms);
}

function calculatefoot(h) {
  var newHeight = h * 0.032808;
  return newHeight;
}

function calculateCms(h) {
  var newHeight = h * 30.48
  return newHeight;
}
