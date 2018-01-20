var mic;
var fft;

var numBars = 10;

function setup(){
   var cvs = createCanvas(500, 500);
   background(0);

   mic = new p5.AudioIn();
   mic.start();

   fft = new p5.FFT();
   fft.setInput(mic);

   noStroke();

   for (var i = 0; i < numBars; i++) {
      var x = i * (width/numBars);
      var h = random(height);
      var f = map(h, 0, height, 50, 255);
      fill(f, 0, 0);
      rect(x, height, width/numBars, -h);
   }

}

function draw(){
   background(0);
   //
   var spectrum = fft.analyze();
   // console.log(spectrum.length);
   //
   fill(255);
   noStroke();
   //
   // for (var i = 0; i < spectrum.length; i+=(spectrum.length/numBars)) {
   // for (var i = 0; i < spectrum.length; i+= numBars) {
   //    var x = map(i, 0, spectrum.length, 0, width);
   //    // var x = i * (width/numBars);
   //    var h = -height + map(spectrum[i], 0, 255, height, 0);
   //    rect(x, height, width / numBars, h );
   //    // console.log("drew bar");
   // }

   // console.log(spectrum);

   for (var i = 0; i < numBars; i++) {
      var chunkLength = Math.floor(spectrum.length / numBars);
      var start = i * chunkLength;
      var avg = 0;
      for (var j = start; j < start + chunkLength; j++) {
         avg += spectrum[j];
      }

      avg = avg / chunkLength;
      // console.log(i, ":", avg);

      var x = map(i, 0, numBars, 0, width);
      var h = -height + map(avg, 0, 255, height, 0);
      var f = map(avg, 0, 255, 55, 255);
      fill(f, 0, 0);
      rect(x, height, width / numBars, h);
   }
   //
   // for (var i = 0; i < numBars; i++) {
   //    var x = map(i, 0, numBars, 0, width);
   //    var h = map(spectrum[i * numBars], 0, 255, height, 0);
   //    rect(x, height, width / numBars, h - height);
   // }
}


// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **

function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
