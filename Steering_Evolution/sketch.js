// Tmo Sealey's implementation of Daniel Shiffman's code.

// Original code by:
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Steering Evolution
// Another version:
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning/tree/master/week2-evolution/01_evolve_steering

// Part 1: [TBA]
// Part 2: [TBA]
// Part 3: [TBA]
// Part 4: [TBA]
// Part 5: [TBA]


// declaring vars
var vehicles = [];
var food = [];
var poison = [];

var debug;

// setup
function setup() {
  createCanvas(1800, 800);

  // add 50 vehicles at random locations
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    vehicles[i] = new Vehicle(x, y);
  }
  // add 40 food at random locations
  for (var i = 0; i < 40; i++) {
    var x = random(width);
    var y = random(height);
    food.push(createVector(x, y));
  }

  // add 20 poison at random locations
  for (var i = 0; i < 20; i++) {
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x, y));
  }
  // create debug checkbox
  debug = createCheckbox("Debug info on?", false);




}

// function mouseDragged() {
//   //vehicles.push(new Vehicle(mouseX, mouseY));
//   food.push(createVector(mouseX, mouseY));
// }


function draw() {
  background(51);

  // do things when mouse is pressed
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      food.push(createVector(mouseX, mouseY));
    if (mouseButton == RIGHT)
      poison.push(createVector(mouseX, mouseY));
    if (mouseButton == CENTER)
      vehicles.push(new Vehicle(mouseX, mouseY));
  }


  // randomly create food about 10% of the time
  if (random(1) < 0.1) {
    var x = random(width);
    var y = random(height);
    food.push(createVector(x, y));
  }

  // randomly create food about 1% of the time
  if (random(1) < 0.01) {
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x, y));
  }

  // draw the food
  for (var i = 0; i < food.length; i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food[i].x, food[i].y, 4, 4);
  }

  // draw the poison
  for (var i = 0; i < poison.length; i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 4, 4);
  }

  // run the different functions for all vehicles
  for (var i = vehicles.length - 1; i >= 0; i--) {
    vehicles[i].boundaries();
    vehicles[i].behaviors(food, poison);
    vehicles[i].update();
    vehicles[i].display();

    var newVehicle = vehicles[i].clone();
    if (newVehicle != null) {
      vehicles.push(newVehicle);
    }

    // remove dead vehicles
    if (vehicles[i].dead()) {
      var x = vehicles[i].position.x;
      var y = vehicles[i].position.y;
      food.push(createVector(x, y));
      vehicles.splice(i, 1);
    }

  }
}
