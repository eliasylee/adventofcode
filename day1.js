const fs = require('fs')

const numberString = fs.readFileSync('./day1.txt', 'utf-8')

const matchingNextSum = (numStr) => {
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

console.log(matchingNextSum(numberString))

const matchingAcrossSum = (numStr) => {
  numStr = numStr.slice(0, -1)
  let count = 0

  for (let i = 0; i < numStr.length; i++) {
    let indexOfAcross = (i + (numStr.length / 2)) % numStr.length

    if (numStr[i] === numStr[indexOfAcross]) {
      count += parseInt(numStr[i])
    }
  }

  return count
}

console.log(matchingAcrossSum(numberString))
