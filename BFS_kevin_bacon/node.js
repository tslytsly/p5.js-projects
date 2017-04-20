// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Breadth-First search

// Part 1: https://youtu.be/piBq7VD0ZSo
// Part 2: https://youtu.be/-he67EEM6z0

function Node(value, x_, y_) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
  this.x = x_;
  this.y = y_;
}

Node.prototype.addEdge = function(neighbor) {
  this.edges.push(neighbor);
  // Both directions!
  neighbor.edges.push(this);
}
