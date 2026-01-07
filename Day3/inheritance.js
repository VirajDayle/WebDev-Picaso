class Shape {
  constructor(color) {
    this.color = color;
  }

  getDescription() {
    console.log(`Shape of ${this.color} color`);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    console.log(radius * radius * Math.p);
  }
}

const circ1 = new Circle(10,"black");
circ1.getDescription();