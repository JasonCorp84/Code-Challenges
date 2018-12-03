// Write a function that accepts an array of strings
// Return the longest string in the array

function longestString(arr) {
  let longest = ''
  let strings = []
  for (i=0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
      }
    }
    return longest
  }
