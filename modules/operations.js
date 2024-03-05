//

// addition
// subtraction
// multiplication
// division
export const doArithmeticOperation = (numA, numB) => {
  return {
    addition: () => {
      return numA + numB;
    },
    subtraction: () => {
      return numA - numB;
    },
    multiplication: () => {
      return numA * numB;
    },
    division: () => {
      return numA / numB;
    },
  };
};
