function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
    this.perimeter = this.sides * this.sideLength;
    console.log(this.perimeter)
    // return this.perimeter;
}

var square = new Shape("square", 4, 5);
// console.log(square);
square.calcPerimeter();
// console.log(square.calcPerimeter());

var triangle = new Shape("triangle", 3, 3);
// console.log(triangle);
triangle.calcPerimeter();
// console.log(triangle.calcPerimeter());