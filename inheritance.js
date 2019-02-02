let person = { name: "Vijay" };
let objBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false, // cannot reassign a value
  enumerable: false, // hides the object property
  configurable: false // delete action will not work
});

console.log(person);

function Circle(radius) {
  // Instance Members
  this.radius = radius;
  this.move = () => {
    console.log("Move");
  };
}

// Prototype Members
Circle.prototype.draw = function() {
  this.move();
  console.log("draw");
};

const circle = new Circle(1);

Circle.prototype.toString = function() {
  return `Circle with radius ${this.radius}`;
};

// Returns only Instense members
console.log(Object.keys(circle));

// Returns all properties including the prototype properties
for (let key in circle) console.log(key);
