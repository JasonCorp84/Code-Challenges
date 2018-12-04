// find the first item that occurs an even number of times in an array
// remember to handle multiple even-occurrenceitems and return the first one
// return null if there are no even-occurrence items

function evenOccurrence(arr) {
 let storage = {}
 arr.forEach(function(value, index) {
   storage[value] = storage[value] + 1 || 1
 })
 for (let i = 0; i < arr.length; i++) {
   let current = arr[i]

   if (storage[current] % 2 === 0) {
     return current
   }
 }
}

// another one
function evenOccurrence(list) {
  let storage = {}
  let first = null

  arr.forEach(item => {
    if (obj[item] === undefined) return obj[item] = 1
    if (obj[item] === 1) return obj[item] = 2
  })

  arr.forEach(item => {
    if (obj[item] === 2 && first === null) first = item 
  })
return first
}

