// Based on code from: https://p5js.org/examples/math-sine-wave.html
//


var xspacing = 1;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 100.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var r = 4;

function setup() {
    createCanvas(710, 400);
    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {
    background(0);
    calcWave();
    renderWave();
    stroke(255,0,0);
    noFill();
    var yLoc = yvalues.length / 2;
    ellipseMode(RADIUS);
    ellipse(width / 2, height / 2 + yvalues[yLoc], r);
    line(width /2 , height, width / 2, height / 2 + yvalues[yLoc] + r);

    }

function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    stroke(255);
    fill(255);
    // beginShape(LINES);
        for (var x = 0; x < yvalues.length; x++) {
        point(x * xspacing, height / 2 + yvalues[x]);
        }
        // endShape();
}
