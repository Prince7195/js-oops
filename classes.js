class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method of Circle
  draw() {
    console.log("Draw");
  }

  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = Circle.parse('{"radius": 10}');

// Private properties with Symbol
const _width = Symbol("width");
const _height = Symbol("height");
const _draw = Symbol("draw");

class Square {
  constructor(width, height) {
    this[_width] = width;
    this[_height] = height;
  }

  [_draw]() {
    console.log(this._width);
  }
}

const s = new Square(1, 2);
// console.log(Object.getOwnPropertySymbols(s));
// const width = Object.getOwnPropertySymbols(s)[0];
// s[width] = 10;
// console.log(s[width]);

// Private properties with WeakMap
const _radius2 = new WeakMap();
const _move = new WeakMap();

class Eclipse {
  constructor(radius) {
    _radius2.set(this, radius);
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    // console.log(_radius2.get(this));
    _move.get(this)();
  }

  get radius() {
    return _radius2.get(this);
  }

  set radius(val) {
    _radius2.set(this, val);
  }
}

const e = new Eclipse(11);

// Inheritance
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("Move");
  }
}

class Rect extends Shape {
  constructor(color, l, b) {
    // It is added only if the parent class has the constructor
    super(color);
    this.l = l;
    this.b = b;
  }
  draw() {
    console.log("Draw");
  }

  // Method Overridings
  move() {
    // Also to use parent method
    super.move();
    console.log("Rect Move");
  }
}

const r = new Rect("red", 1, 3);
