class Shape {
    constructor(color) {
      this.color = color;
    }
    drawShape() {
      console.log("Draw shape "+this.color);
    }
    calculateArea() {
      console.log("Shape area");
    }
  }
  
//   export default Shape;
  module.exports = Shape;