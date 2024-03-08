import chalk from 'chalk'
export const addition = (numA, numB) => {
  const result = numA + numB
  return {
    operationWithString: `${numA} ${chalk.blue('+')} ${numB} = ${chalk.magenta(
      result
    )}`,
  }
}
export const subtraction = (numA, numB) => {
  const result = numA - numB
  return {
    operationWithString: `${numA} ${chalk.red('-')} ${numB} = ${chalk.magenta(
      result
    )}`,
  }
}
export const multiplication = (numA, numB) => {
  const result = numA * numB
  return {
    operationWithString: `${numA} ${chalk.green('*')} ${numB} = ${chalk.magenta(
      result
    )}`,
  }
}
export const division = (numA, numB) => {
  const result = numA / numB
  return {
    operationWithString: `${numA} ${chalk.yellow(
      '/'
    )} ${numB} = ${chalk.magenta(result)}`,
  }
}
