class Rectangle {
  constructor(length, width = 30, color) {
    this.length = length;
    this.width = width;
    this.color = color;
    this.price = 5000;
  }

  area(height) {
    const area = this.width * this.length * height;
    return area;
  }

  perimeter() {
    const perimeter = 2 * (this.width + this.area);
    return perimeter;
  }

  priceTell() {
    return this.price;
  }
}

const rect = new Rectangle(15, 20, "blue");
console.log(rect.area(10));
console.log(rect.priceTell());
