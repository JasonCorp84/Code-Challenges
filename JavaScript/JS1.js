
//exercise 1 of 4 
const unimaginativeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// Write a "for" loop that console.log()'s every third value of the unimaginativeArray.

for (i = 0; i < 10; i += 3) {
  console.log(i)
}

//exercise 2 of 4
const nameArray = [
  'Jacquelynn',
  'Csaba',
  'Ellen',
  'Moises',
  'Cole',
  'Jeff',
  "Dre'Sean"
 ]
// Write a console.log() that displays the last value in nameArray. Use the `.length` property 
// of array's to access the last value. 

let last = nameArray[nameArray.length - 1]
console.log(last)

// exercise 3 of 4
const adjectiveArray = [ 'awesome', 'fantastic', 'amazing', 'wonderful', 'fabulous', 'incredible', 'marvelous' ];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Use the string "is"
// to combine the name with the adjective. For example:
// "Jacquelynn is awesome"
// "Csaba is fantastic" et cetera...

//1. Iterate through nameArray w/ for loop
//2. Store a value to be used w/sentence from nameArray
//3. iterate through adjectiveArray to append to sentence
//4. console.log sentence with value from both arrays

for (let i = 0; i < adjectiveArray.length; i++) {
  console.log(nameArray[i] + 'is' + adjectiveArray[i] + '!')
}

// exercise 4 of 4
// Write a "for" loop that console.log()'s every third number
// in unimaginativeArray but initialize the iterator so it doesn't
// console.log() the zero
for (let i = 3; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i])
}