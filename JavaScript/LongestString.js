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
// this simply compares each string in the array to the current longest string. If the new string is longer than the current longest it replaces as the longest