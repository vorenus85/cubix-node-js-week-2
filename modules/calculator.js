import readline from 'readline'
import {
  addition,
  division,
  multiplication,
  subtraction,
} from './operations.js'

let operator = {}
let numA = null
let numB = null
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
    numA = parseFloat(input, 10)
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

    numB = parseFloat(input, 10)
    return showResult()
  })
}

const showResult = () => {
  let final
  switch (operator) {
    case '+':
      final = addition(numA, numB)
      break
    case '-':
      final = subtraction(numA, numB)
      break
    case '*':
      final = multiplication(numA, numB)
      break
    case '/':
      final = division(numA, numB)
      break
  }

  // eslint-disable-next-line no-console
  console.log(`${final?.operationWithString}`)
  myReadline.close()
}

export const start = () => {
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
