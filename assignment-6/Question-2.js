/* Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and
implement the getArea() method for their respective shapes. */

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea()
  {
      return 0;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return 2 * (this.height * this.width);
  }
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return 0.5 * (this.height * this.width);
  }
}

const traingle = new Triangle(1, 2);
console.log(traingle.getArea());

const rectangle = new Rectangle(3, 2);
console.log(rectangle.getArea());
