/* Define a function that takes in a positive integer and returns the Roman Numeral representation of that number.  

Symbol    Value
  I         1
  V         5
  X         10
  L         50
  C         100
  D         500
  M         1,000 

Example: romanNumeralize(1973) should return 'MCMLXXIII'.  */

// Patrick's solush
function romanNumeralize(n) {
  let number = n 
  const rn = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let returnString = '',
      key,
      count = 1
  for (key in rn) {
    let value = rn[key]
    while (number >= value) {
      console.log(`Step #${count}`)
      console.log(`while(${number} >= ${value})`)
      console.log(`${returnString === '' ? ' " " ' : returnString} += ${key} ---> ${returnString + key}`)
      returnString += key
      console.log(`${number} -= ${value} ---> ${bumber - value}\n`)
      number -+ value
      count++
    }
  }
  return returnString
}

// recursive solush using array of arrays

function romanNumeralize(n) {
  let number = n;
  const rn = [
    [1000, 'M'], 
    [900, 'CM'], 
    [500, 'D']];
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
// base case
if (number === 0) {
  return ''
}
for (let i = 0; i < rn.length; i++) {
  if (number >= rn[i][0]) {
    // recursive function coming at ya
    return rn[i][1] + romanNumeralize(number - rn[i][0])
  }
}
}

// another solush
function romanNumeralize(n) {
  let str = ''
  let num = String(n)
  let numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let i =  numerals.length - 1
  while (num.length > 0) {
    if (parseInt(num)> 1000) {
      let thousands = num.slice(0, -3)
      str = numerals[i].repeat(parseInt(thousands))
      num = num.slice(-3)
      console.log(i)
      console.log(str)
      console.log(num) 
    } else {
      i--
      if (parseInt(num[0]) >= 5) {
        str += numerals[i]
        console.log("subtract 5 from largest digit")
        console.log("largest digit: " + num[0])
        num[0] = parseInt(num[0]) - 5
        console.log("subtract 5: " + parseInt(num[0] - 5))
        console.log(i)
        console.log(str)
        console.log(num)
      }
      i--
      str += numerals[i].repeat(parseInt(num[0]))
      num = num.slice(-num.length - 1)
      console.log(i)
      console.log(str)
      console.log(num)
    }
  }
}

console.log(romanNumeralize(1978))
