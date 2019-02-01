// Premitive values
let a = 10;
b = a;
a = 199;
// Result a = 199, b = 10

// Reference Values
let obj1 = { val: 10 };
let obj2 = obj1;
obj1.val = 199;
// Result obj1 = { val: 199 }, obj2 = { val: 199 }

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}
const circle1 = new Circle(1);

// Factory Function
function createcircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("draw");
    }
  };
}

const circle = createcircle(1);

// Adding property
circle.location = { x: 1 };

// Adding dynamic property
const propName = "center location";
circle[propName] = { name: "center" };

// Delete Property
delete circle.location;

// Enumerating[mention one by one] Properties
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) {
  console.log("Circle has radius");
}

// Abstraction -> hide the details(private) -> show the required things
function Circles(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 2 };
  let computeOptimumlocation = factor => {};
  this.getDefaultLoc = () => {
    return defaultLocation;
  };
  this.draw = () => {
    computeOptimumlocation(0.1);
    // defaultLocation
    // this.radius
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: () => {
      return defaultLocation;
    },
    set: val => {
      if (!val.x && !val.y) {
        throw new Error("Invalid location.");
      }
      defaultLocation = val;
    }
  });
}

const circles = new Circles(2);
circles.draw();
