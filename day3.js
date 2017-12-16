const target = 289326

const findCoordinates = (target) => {
  let ticker = 1
  let squareRoot = 3
  let square = 9

  while (square < 289326) {
    ticker += 1
    squareRoot += 2
    square = squareRoot * squareRoot
  }

  ticker -= 1
  squareRoot -= 2
  square = squareRoot * squareRoot

  let coord = ticker
  let x = coord
  let y = -coord

  let squareUp = square + (ticker * 2)
  let squareLeft = squareUp + (ticker * 2)
  let squareDown = squareLeft + (ticker * 2)
  let squareRight = squareDown + (ticker * 2)

  let start = 'square'

  if (squareLeft > target) {
    start = 'squareUp'
  } else if (squareDown > target) {
    start = 'squareLeft'
  } else if (squareRight > target) {
    start = 'squareDown'
  }

  switch (start) {
    case 'start': {
      square++
      x++

      while (square < target) {
        square++
        y++
      }
      return Math.abs(x) + Math.abs(y)
    }
    case 'squareUp': {
      square++
      x++
      square += ((ticker * 2) - 1)
      y += ((ticker * 2) - 1)
      while (square < target) {
        square++
        x--
        // console.log(square)
        // console.log([x, y])
      }
      return Math.abs(x) + Math.abs(y)
    }
    case 'squareLeft': {
      square++
      x++
      square += ((ticker * 4) - 1)
      y += ((ticker * 2) - 1)
      x -= (ticker * 2)

      while (square < target) {
        square++
        y--
      }
      return Math.abs(x) + Math.abs(y)
    }
    case 'squareDown': {
      square++
      x++
      square += ((ticker * 6) - 1)
      y += ((ticker * 2) - 1)
      x -= (ticker * 2)
      y -= (ticker * 2)

      while (square < target) {
        square++
        x++
      }
      return Math.abs(x) + Math.abs(y)
    }
    default:
      break
  }
}

console.log(findCoordinates(target))
