import readline from 'readline'
import {
  addition,
  division,
  multiplication,
  subtraction,
} from './operations.js'

const calculator = () => {
  let operator = {}
  const numbers = {}
  const myReadline = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const chooseNumA = () => {
    myReadline.question('Add num A: ', (input) => {
      if (isNaN(input) || !input) {
        // eslint-disable-next-line no-console
        console.log('Please give valid number')
        return chooseNumA()
      }
      numbers.numA = parseFloat(input, 10)
      return chooseNumB()
    })
  }

  const chooseNumB = () => {
    myReadline.question('Add num B: ', (input) => {
      if (operator === '/' && parseFloat(input, 10) === 0) {
        // eslint-disable-next-line no-console
        console.log('If operation is division cannot add 0 to second argument')
        return chooseNumB()
      }
      if (isNaN(input) || !input) {
        // eslint-disable-next-line no-console
        console.log('Please give valid number')
        return chooseNumB()
      }

      numbers.numB = parseFloat(input, 10)
      return showResult()
    })
  }

  const showResult = () => {
    let final
    switch (operator) {
      case '+':
        final = addition(numbers.numA, numbers.numB)
        break
      case '-':
        final = subtraction(numbers.numA, numbers.numB)
        break
      case '*':
        final = multiplication(numbers.numA, numbers.numB)
        break
      case '/':
        final = division(numbers.numA, numbers.numB)
        break
    }

    // eslint-disable-next-line no-console
    console.log(`${final?.operationWithString}`)
    myReadline.close()
  }

  const start = () => {
    myReadline.question('Choose operation sign: ', (input) => {
      switch (true) {
        case input === '+':
          operator = '+'
          break
        case input === '-':
          operator = '-'
          break
        case input === '*':
          operator = '*'
          break
        case input === '/':
          operator = '/'
          break
        default:
          // eslint-disable-next-line no-console
          console.log('Please choose valid operation sign: [-+/*]')
          return start()
      }
      return chooseNumA()
    })
  }

  return { start }
}

export function startCalculator() {
  calculator().start()
}
