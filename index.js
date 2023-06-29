const inquirer = require('inquirer');

const fs = require("fs");

const Colors = require("./lib/additional");
const Shape = require("./lib/shapes");
const Triangle = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Square = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "What is your logo's text? (up to 3 characters)",
        name: "text",
    },
    {
        type: "input",
        message: "What is the color of your logo's text?",
        name: "textColor",
         colors: (input) => {
        const validate = new Validate("", "", input);
        if (validate.colorsTextColor()) {
            return true;
      } else throw "Incorrect color choice, must be hexacode or color keyword.";
    }
    },    
    {
        type: "list",
        message: "What would you like as the shape of your logo?",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
    },    
    {
        type: "input",
        message: "What color is your logo's background shape?",
        name: "shapeColor",
        colors: (input) => {
        const validate = new Validate("", "", input);
        if (validate.colorsShapeColor()) {
        return true;
      } else throw "Incorrect Shape Color choice, must be hexacode or color keyword.";
    }
  
    },    
];

inquirer.prompt(questions)
    .then((answers) => {
        const {text, textColor, shape, shapeColor } = answers
    
        switch(shape) {
            case "Triangle":
              let triSVG = 'polygon points="150, 18 244, 182 56, 182"';
              let triangle = new Triangle(text, textColor, shapeColor, triSVG);
              return triangle;
              break;
            case "Circle":
              let cirSVG = 'circle cx="150" cy="100" r="80"';
              let circle = new Circle(text, textColor, shapeColor, cirSVG);
              return circle;
              break;  
            case "Square":
              let squareSVG = 'rect width="100%" height="100%"';
              let square = new Square(text, textColor, shapeColor, squareSVG);
              return square;
              break;  
        }
    })

    .then((results) => {
        const shapeRender = results.renderShape();
        const shapeTextRender = results.renderText();
        const fullRender = `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

  ${shapeRender}

  ${shapeTextRender}

</svg>
`;
    fs.writeFile(`./examples/${results.text}.svg`, fullRender, (err) =>
      err
        ? console.log(err)
        : console.log(`Success! Generated ${results.text}.svg`)
    );
  });
    