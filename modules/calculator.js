import readline from "readline";
import {
  addition,
  division,
  multiplication,
  subtraction,
} from "./operations.js";

export const calculator = {
  operator: null,
  numbers: {},
  myReadline: readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }),
  chooseNumA() {
    this.myReadline.question("Add num A: ", (input) => {
      if (isNaN(input) || !input) {
        console.log("Please give valid number");
        return this.chooseNumA();
      }
      this.numbers.numA = parseInt(input, 10);
      return this.chooseNumB();
    });
  },
  chooseNumB() {
    this.myReadline.question("Add num B: ", (input) => {
      console.log("adasdasd", parseInt(input, 10), this.operation);
      if (this.operator === "/" && parseInt(input, 10) === 0) {
        console.log("If operation is division cannot add 0 to second argument");
        return this.chooseNumB();
      }
      if (isNaN(input) || !input) {
        console.log("Please give valid number");
        return this.chooseNumB();
      }

      this.numbers.numB = parseInt(input, 10);
      return this.showResult();
    });
  },
  showResult() {
    let final;
    switch (this.operator) {
      case "+":
        final = addition(this.numbers.numA, this.numbers.numB);
        break;
      case "-":
        final = subtraction(this.numbers.numA, this.numbers.numB);
        break;
      case "*":
        final = multiplication(this.numbers.numA, this.numbers.numB);
        break;
      case "/":
        final = division(this.numbers.numA, this.numbers.numB);
        break;
    }
    console.log(`${final?.operationWithString}`);
    this.myReadline.close();
  },
  start() {
    this.myReadline.question("Choose operation sign: ", (input) => {
      switch (true) {
        case input === "+":
          this.operator = "+";
          return this.chooseNumA();
        case input === "-":
          this.operator = "-";
          return this.chooseNumA();
        case input === "*":
          this.operator = "*";
          return this.chooseNumA();
        case input === "/":
          this.operator = "/";
          return this.chooseNumA();
        default:
          console.log("Please choose valid operation sign: [-+/*]");
          return this.start();
      }
    });
  },
};
