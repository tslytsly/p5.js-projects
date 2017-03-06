// Tom Sealey
// Original work by Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://youtu.be/4hA7G3gup-4

var font;
var density = 0.25;
var densitySlider;
var vehicles = [];
var txt1 = "hi";
var txt2 = "there";
var textBool = true;
var mouseClicks = 0;

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(900, 300);
  background(51);
  colorMode(HSB, 100, 100, 255);
  densitySlider = createSlider(0.1, 1, 0.25, 0.01);
  densitySlider.position(400,300);

  var points = font.textToPoints(txt1, 100, 200, 192, {
    sampleFactor: density
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y, random(50,200));
    vehicles.push(vehicle);
    }

    createP("Press the spacebar...");

    createP("Now click the mouse inside the canvas...");

}

function draw() {
  background(51);
  var density = densitySlider.value();
    for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function word1Update() {
  txt1 = word1.value();
}

function mousePressed(){
  if (mouseX < 900 && mouseY < 300){
    if (mouseClicks <= 2) {
      for (var i = 0; i < vehicles.length; i++){
        var v = vehicles[i];
        v.newTarget(random(width), random(height));
      }
    } else {
      for (var i = 0; i < vehicles.length; i++){
        var v = vehicles[i];
        v.newTarget(v.pos.x, height);
        mouseClicks = 0;
      }
    }
    mouseClicks++;
  }
}

function keyPressed() {
  if (keyCode === 32) {
      if (!textBool) {
        var points = font.textToPoints(txt1, 100, 200, 192, {
          sampleFactor: density
        });
        textBool = true;
        console.log(points.length);

        if (points.length > vehicles.length) {
          for (var i =0; i < vehicles.length; i++) {
              var pt = points[i];
              var v = vehicles[i];
              v.newTarget(pt.x, pt.y);
            }
            for (var i = vehicles.length; i < points.length; i++) {
              var pt = points[i];
              var vehicle = new Vehicle(pt.x, pt.y, random(0,255));
              vehicles.push(vehicle);
              }
        } else if (points.length < vehicles.length){
          for (var i = points.length; i < vehicles.length; i++) {
            var v = vehicles[i];
            v.newTarget(random(width), height);
            }
          // for (var i = vehicles.length - 1; i > points.length; i--) {
          //   var v = vehicles[i];
          //   v.newTarget(pt.x, height);
          //   }
            for (var i =0; i < points.length; i++) {
            var pt = points[i];
            var v = vehicles[i];
            v.newTarget(pt.x, pt.y);
          }
        } else {
            for (var i =0; i < points.length; i++) {
            var pt = points[i];
            var v = vehicles[i];
            v.newTarget(pt.x, pt.y);
          }
       }
     }

     else {
      var points = font.textToPoints(txt2, 100, 200, 192, {
        sampleFactor: density
      });
      textBool = false;

      if (points.length > vehicles.length) {
        for (var i =0; i < vehicles.length; i++) {
            var pt = points[i];
            var v = vehicles[i];
            v.newTarget(pt.x, pt.y);
          }
          for (var i = vehicles.length; i < points.length; i++) {
            var pt = points[i];
            var vehicle = new Vehicle(pt.x, pt.y, random(0,255));
            vehicles.push(vehicle);
            }
      } else if (points.length < vehicles.length) {
        for (var i = vehicles.length; i > points.length; i--) {
          var v = vehicles[i];
          v.newTarget(random(width), height);
          }
          for (var i =0; i < points.length; i++) {
          var pt = points[i];
          var v = vehicles[i];
          v.newTarget(pt.x, pt.y);
        }
      } else {
      for (var i =0; i < points.length; i++) {
          var pt = points[i];
          var v = vehicles[i];
          v.newTarget(pt.x, pt.y);
        }
     }
    }
  }
}
