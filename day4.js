const fs = require('fs')

const passphrases = fs.readFileSync('./day4.txt', 'utf-8').split('\n').slice(0, -1)

const noRepeatWords = (phrases) => {
  let count = phrases.length

  for (let i = 0; i < passphrases.length; i++) {
    let wordBank = new Set()
    const phrase = passphrases[i]
    const words = phrase.split(' ')

    for (let j = 0; j < words.length; j++) {
      const word = words[j]

      if (wordBank.has(word)) {
        count -= 1
        break
      } else {
        wordBank.add(word)
      }
    }
  }

  return count
}

console.log(noRepeatWords(passphrases))

const noAnagrams = (phrases) => {
  const ALPHABET = []

  for (let i = 97; i < 123; i++) {
    ALPHABET.push(String.fromCharCode(i))
  }

  let count = passphrases.length

  for (let i = 0; i < passphrases.length; i++) {
    let wordBank = new Set()
    const phrase = passphrases[i]
    const words = phrase.split(' ')

    for (let j = 0; j < words.length; j++) {
      const word = words[j]
      const lettersCount = {}

      for (let k = 0; k < word.length; k++) {
        const letter = word[k]
        lettersCount[letter] = lettersCount[letter]
          ? lettersCount[letter] + 1
          : 1
      }

      let formattedWord = ''
      ALPHABET.forEach(letter => {
        formattedWord += `${letter}${lettersCount[letter]}`
      })

      if (wordBank.has(formattedWord)) {
        count -= 1
        break
      } else {
        wordBank.add(formattedWord)
      }
    }
  }

  return count
}

console.log(noAnagrams(passphrases))
