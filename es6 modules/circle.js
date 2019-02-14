// Implementation Detail
const _radius = new WeakMap();

// Public Interface
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(_radius.get(this));
  }
}
