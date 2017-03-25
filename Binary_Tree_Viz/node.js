function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.r = 16;
  this.sWeight = 2;
  this.tSize = 18
  this.distance = 50;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  var c = color(255);
  if (this.left != null) {
    this.left.visit(this);
  }
  // console.log(this.value);
  if (this.value < parent.value){
    var c = color(255,0,0);
    line(parent.x - this.r, parent.y, this.x + this.r, this.y);
  } else if (this.value == parent.value) {
    var c = color(0,0,255);
  } else {
    var c = color(0,255,0);
    line(parent.x + this.r, parent.y, this.x - this.r, this.y);
  }
  fill(c);
  noStroke();
  textSize(this.tSize);
  textAlign(CENTER, CENTER);
  text(this.value, this.x, this.y);
  strokeWeight(this.sWeight);
  stroke(c);
  noFill();
  ellipse(this.x, this.y, 2*this.r, 2*this.r);
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      // this.left.x = this.x - this.horizSpace;
      // this.left.y = this.y + this.vertSpace;
      this.left.x = this.x - (this.distance * cos(radians(45)));
      this.left.y = this.y + (this.distance * sin(radians(135)));
    } else {
      this.left.addNode(n)
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      // this.right.x = this.x + this.horizSpace;
      // this.right.y = this.y + this.vertSpace;
      this.right.x = this.x + (this.distance * cos(radians(45)));
      this.right.y = this.y + (this.distance * sin(radians(135)));
    } else {
      this.right.addNode(n);
    }
  }
}
