// write a function called sortString that returns a passed string with letters in alphabetical order

// simplest way with string method
function sortString(str) {
  return str.split('').sort().join('') // split into individual letters, sort, join back into string
}

// jean's solush that I have a tenuous grasp of
function sortString(str) {
  if (typeof str !== 'string') {
    throw (new error ("This ain't no string, fool!")) // type check could stop the whole thing right here
  }

  let letter // create letter variable

  for (let i = 0; i < str.length; i++) { // loop de loop
    letter = str.charAt(i) // letter is the current character in the string
    console.log('i: ' + i + letter) // print ("i: i = letter")
    for (let j = 0; j < i; j++) { // loop over the letter to the left of the current letter
      console.log('j: ' + j + letter) // print ("j: j + letter")

      if (letter < str.charAt(j)) { // if the letter is less that j
        str = str.slice(0, j) + letter + str.slice(j, i) + str.slice(i+1) // slice the characters from 0 index to wherever j is, concat letter, concat letters between j and i, then 
        // concat i + 1
        console.log(str) // print the string
        j = i // stop when j and i are equal
      }
    }
  }
  return str
}

