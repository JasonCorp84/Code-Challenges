// write a function that takes in a string and reverses the casing of that string

// hurray for ternaries!
function reverseCase(str) {
  let arr = str.split('') // split string
  let newArr = [] // create empty array
  arr.forEach(letter => { // for each letter in string 
    letter = letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase() // if letter is upper is true, convert to lower if false convert to upper
    newArr.push(letter) // push that letter to the array
})
return newArr.join('') // join array of letters back into a string
}

// without ternary
function reverseCase(str) {
  let arr = str.split('') // split into array of letters
  let newArr = [] // create empty array to hold letters after we work on them
  for (let i =0; i < arr.length; i++) { // loop through like a bawse
    if (str[i] === str[i].toUpperCase()) { // if index is upper case
      str[i] = str[i].toLowerCase() // convert to lower case
    } else {
      if (str[i] === str[i].toLowerCase()) { // if index is lower case
        str[i] = str[i].toUpperCase() // convert to lower case
      }
    }
  }
  return str.join('')
}

// without new array
function reverseCase(str) {
  str = str.split('') // split into individual letters
  for (let i = 0; i < str.length; i++) { // loop through
    if (str[i] === str[i].toUpperCase()) { // if current index is upper case
      str[i] = str[i].toLowerCase // switch to lowercase
    } else {
      if (str[i] === str[i].toLowerCase()) { // if current index is lower case
        str[i] = str[i].toUpperCase() // convert to upper case
      }
    }
  }
return str.join('') // put new string back together and return it

// refactored for less repetition but no ternary
function reverseCase(str) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) { // loop through
    if (str[i] === str[i].toUpperCase()) { // if current index is upper case
      str[i] = str[i].toLowerCase() // switch to lowercase
    } else { 
      str[i] = str[i].toUpperCase() // switch to upper case - don't need another conditional here because there are only two choices so we can go straight to the logic
      }
    }
  return str.join('')
}

// refactored again with check
function reverseCase(str) {
  if (!str || typeof str === 'number') { return null } // type check if string is numbers the whole thing is pointless - checks like these save time and resources
  str = str.split('')
  for (let i = 0; i < str.length; i++) { 
    if (str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase()
    } else { 
      str[i] = str[i].toUpperCase() 
      }
    }
  return str.join('')
}
