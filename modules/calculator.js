import readline from "readline";
import { doArithmeticOperation } from "./operations.js";

export const calculator = {
  operation: {},
  numbers: {},
  myReadline: readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }),
  chooseNumA() {
    this.myReadline.question("Add num A: ", (input) => {
      if (isNaN(input)) {
        console.log("Please give valid number");
        return this.chooseNumA();
      }
      this.numbers.numA = parseInt(input, 10);
      this.chooseNumB();
    });
  },
  chooseNumB() {
    this.myReadline.question("Add num B: ", (input) => {
      if (isNaN(input)) {
        console.log("Please give valid number");
        return this.chooseNumB();
      }
      this.numbers.numB = parseInt(input, 10);
      this.showResult();
    });
  },
  showResult() {
    let result;
    switch (this.operation.sign) {
      case "+":
        result = doArithmeticOperation(
          this.numbers.numA,
          this.numbers.numB
        ).addition();
        break;
      case "-":
        result = doArithmeticOperation(
          this.numbers.numA,
          this.numbers.numB
        ).subtraction();
        break;
      case "*":
        result = doArithmeticOperation(
          this.numbers.numA,
          this.numbers.numB
        ).multiplication();
        break;
      case "/":
        result = doArithmeticOperation(
          this.numbers.numA,
          this.numbers.numB
        ).division();
        break;
    }
    console.log(
      `${this.numbers.numA} ${this.operation.sign} ${this.numbers.numB} = ${result}`
    );
    this.myReadline.close();
  },
  start() {
    this.myReadline.question("Choose operation sign: ", (input) => {
      switch (true) {
        case input === "+":
          this.operation.sign = "+";
          this.chooseNumA();
          break;
        case input === "-":
          this.operation.sign = "-";
          this.chooseNumA();
          break;
        case input === "*":
          this.operation.sign = "*";
          this.chooseNumA();
          break;
        case input === "/":
          this.operation.sign = "/";
          this.chooseNumA();
          break;
        default:
          console.log("Please choose valid operation sign: [-+/*]");
          return this.start();
      }
    });
  },
};
