function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

// Intermediate function Inheritent
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color); // Same as Super() constroctor
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log("Draw");
};

// Function Override
Circle.prototype.duplicate = function() {
  console.log("Duplicate Overritten");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("Duplicate Square");
};

const shapes = [new Circle(), new Square()];

// Polymorphism
for (let shape of shapes) {
  shape.duplicate();
}

const c = new Circle(1, "red");
