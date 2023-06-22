class Shape {
    constructor(text, textColor, shapeColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }

renderShape() {
    return`<${this.shape} fill = '${this.shapeColor}"/>`;
    }

renderText() {
   return`<text x="50" y="50" font size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    }
};

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor)
};

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor)
};

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor)
};


module.exports = Shape;
module.exports = Circle;
module.exports = Square;
module.exports = Triangle;

