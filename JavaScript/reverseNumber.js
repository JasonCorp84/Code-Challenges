// write a function called reverseNumber that reverses a number

// simplest way
function reverseNumber(n) {
  n.toString().split('').reverse().join('') // pretty self explanatory but: converts to string, splits into individual numbers, reverses order, joins numbers into string
  return parseInt(n) // parses string and returns as integer
}

// refactored for efficiency
function reverseNumber(n) {
  return parseInt(n.toString().split('').reverse().join('')) // same as above just simplified into one step
}

// long way
function reverseNumber(n) {
  let rev = n.toString() // convert number to string
  let reversed = [] // empty array to hold reversed
  for (i = 0; i < rev.length; i++) { // loooooooop
    reversed.unshift(rev[i]) // add each index to new array at the beginning - this is what actually reverses it
  }
  return Number(reversed.join('')) // return string joined and in number format
}

// fancy base 10 way
function reverseNumber(n) {
  let result =0 // gives us a starting point
  while (n > 0) { // as long as n is above zero
    result = n * 10 
    result += n % 10 
    n -= n % 10 
    n = n/10
  }
  return result
}
