const fs = require('fs')

const lines = fs.readFileSync('./day2.txt', 'utf-8').split('\n')

const checkSum = (lines) => {
  let count = 0

  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i]
    const numbers = line.split('\t')

    let lowestNum
    let highestNum

    for (let i = 0; i < numbers.length; i++) {
      let number = parseInt(numbers[i])

      if (!lowestNum || (number < lowestNum)) {
        lowestNum = number
      }

      if (!highestNum || (number > highestNum)) {
        highestNum = number
      }
    }

    count += (highestNum - lowestNum)
  }

  return count
}

console.log(checkSum(lines))

const _merge = (left, right) => {
  let mergedArray = []

  while (left[0] || right[0]) {
    let leftDigit = left[0]
    let rightDigit = right[0]

    if (!rightDigit || (leftDigit > rightDigit)) {
      mergedArray.push(left.shift())
    } else if (!leftDigit || (rightDigit > leftDigit)) {
      mergedArray.push(right.shift())
    } else {
      mergedArray.push(left.shift())
      mergedArray.push(right.shift())
    }
  }

  return mergedArray
}

const mergeSort = (numbers) => {
  if (numbers.length <= 1) {
    return numbers
  }

  const length = numbers.length
  const half = length / 2
  let left = numbers.slice(0, half)
  let right = numbers.slice(half, length)

  return _merge(mergeSort(left), mergeSort(right))
}

const checkQuotient = (lines) => {
  let count = 0

  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i]
    const strings = line.split('\t')
    const numbers = strings.map(str => parseInt(str))
    const sortedNumbers = mergeSort(numbers)

    for (let j = 0; j < sortedNumbers.length - 1; j++) {
      let found = false

      for (let k = j + 1; k < sortedNumbers.length; k++) {
        let largerNum = sortedNumbers[j]
        let smallerNum = sortedNumbers[k]

        if (largerNum % smallerNum === 0) {
          count += largerNum / smallerNum
          found = true
          break
        }
      }

      if (found) {
        break
      }
    }
  }

  return count
}

console.log(checkQuotient(lines))
