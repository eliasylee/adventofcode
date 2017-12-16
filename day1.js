const fs = require('fs')

const numberString = fs.readFileSync('./day1.txt', 'utf-8')

const matchingSum = (numStr) => {
  numStr = numStr.slice(0, -1)
  let count = 0

  for (let i = 0; i < numStr.length; i++) {
    let indexOfNext = i + 1 === numStr.length
      ? 0
      : i + 1

    if (numStr[i] === numStr[indexOfNext]) {
      count += parseInt(numStr[i])
    }
  }

  return count
}

console.log(matchingSum(numberString))
