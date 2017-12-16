const target = 289326

const findDistance = (target) => {
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

console.log(findDistance(target))

const findLowestValue = (target) => {
  const DIRECTIONS = {
    'right': [1, 0],
    'up': [0, 1],
    'left': [-1, 0],
    'down': [0, -1]
  }

  const CHECKS = {
    'right': [
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1]
    ],
    'up': [
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1]
    ],
    'left': [
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1]
    ],
    'down': [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1]
    ]
  }

  const grid = {
    '0,0': 1
  }

  let direction = 'right'
  let currentLocation = [0, 0]
  let currentValue = 1

  while (currentValue < target) {
    currentLocation[0] += DIRECTIONS[direction][0]
    currentLocation[1] += DIRECTIONS[direction][1]

    let sum = 0
    for (let i = 0; i < 4; i++) {
      let checkDiff = CHECKS[direction][i]
      let checkCoord = `${currentLocation[0] + checkDiff[0]},${currentLocation[1] + checkDiff[1]}`

      if (grid[checkCoord]) {
        sum += grid[checkCoord]
      }
    }

    grid[`${currentLocation[0]},${currentLocation[1]}`] = sum
    currentValue = sum

    switch (direction) {
      case 'right':
        if (!grid[`${currentLocation[0] + DIRECTIONS['up'][0]},${currentLocation[1] + DIRECTIONS['up'][1]}`]) {
          direction = 'up'
        }
        break
      case 'up':
        if (!grid[`${currentLocation[0] + DIRECTIONS['left'][0]},${currentLocation[1] + DIRECTIONS['left'][1]}`]) {
          direction = 'left'
        }
        break
      case 'left':
        if (!grid[`${currentLocation[0] + DIRECTIONS['down'][0]},${currentLocation[1] + DIRECTIONS['down'][1]}`]) {
          direction = 'down'
        }
        break
      case 'down':
        if (!grid[`${currentLocation[0] + DIRECTIONS['right'][0]},${currentLocation[1] + DIRECTIONS['right'][1]}`]) {
          direction = 'right'
        }
        break
      default:
        return
    }
  }

  return currentValue
}

console.log(findLowestValue(target))
