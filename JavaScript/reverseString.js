// write a function called reverseString that accepts a string and returns a reversed copy of the string

// Moises's solution that does the same as mine but backwards
function reverseString(str) {
  let returnString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    returnString += str[i]
  }
  return returnString
}

// my naive solution
function reverseString(str) {
  let returnString = ''
  for (let i = 0; i < str.length; i++) {
    returnString = str.charAt(i) = returnString
  }
  return returnString
}

// model solution but I wanted to do it the long way to practice the logic
function reverseString(str) {
  return str.split('').reverse().join('')
}