/* Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.

For example:
console.log(vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz')); // <--- 0
console.log(vowelCount('Hello world!')); // <--- 3
console.log(vowelCount('Pinto beans')); // <--- 4
console.log(vowelCount('The quick brown fox jumped over the lazy dog.')); // <--- 12
console.log(vowelCount('Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.')); // <--- 58
console.log(vowelCount('All I have ever wanted is to be an Uber driver!')); // <--- 16

For the purposes of this exercise, we are not considering "y" as a vowel. */

function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'] // define which are values
  let count = 0 // start here
  str.split('').forEach(letter => { // split string into array of letters and iterate through it
    vowels.includes(letter.toLowerCase()) ? count++ : false // if it includes any of the defined vowels increase count by one, if not return false
  })
  return count
}