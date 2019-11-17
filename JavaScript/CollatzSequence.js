/*  Today you will write a function which takes a positive integer number as an argument and returns it's "Collatz chain".
The Collatz chain will stop at one.

Named after Lothar Collatz, the "Collatz conjecture" defines a sequence of numbers. That sequence is the Collatz "chain". 
Starting with a positive integer, the Collatz conjecture determines the next integer in the chain until the number 1 is obtained.

Your Collatz algorithm will evaluate the integer and then, depending on the condition of the integer, perform the following tasks:

If the integer is even, then halve the number.
If the integer is not even, then multiply it by 3 and add one.

An example chain starting from the number 23 looks like this:

[23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]

Boldface signifies the odd numbers

Your function should behave like this:
console.log(collatzSequence(23));
// [ 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ] */

function collatzSequence(n) {
  // create new array for chain
  // push n to array
  // if n is even, halve it and push to new array
  // if odd, multiply by three, add one and push to array
  let chain = []
  chain.push(n)
  while (n !== 1) { // stop when n is 1 
    // oops forgot that condition the first time and only got an array of 2 back 
    if (n % 2 === 0) { // if n is even
      n /= 2 // n = n/2
    } else { 
      n = (n * 3) + 1 // otherwise n = (n * 3) + 1
    }
    chain.push(n) // add to array
  }
  return chain // duh
}

// refactored a bit
function collatzSequence(n) {
  let m = n // so we can leave argument unmutated
  let chain = [ m ] // saves a step by creating the array with m in it rather than creating empty and then pushing m
  while (m !== 1) {
    if (m % 2) {
      m/= 2
    } else {
      m = (m * 3) + 1
    }
    chain.push(m)
  }
}
console.log(collatzSequence(23))

// trying to simplify
// this is resulting in a giant ass loop and I'm not sure why
// oh wait, I know why. it's just constantly re-doing the starting number. Derp TODO: play more later to see if I can make this work
function collatzSequence(n) {
  let m = n
  let chain = [ m ]
  while (m !== 1) {
    if ( m % 2 === 0) {
      chain.push(m / 2) 
      console.log(chain)
    } else {
      chain.push((m * 3) + 1)
      console.log(chain)
    }
  }
  return chain
}

// now with ternaries!
function collatzSequence(n) {
  let m = n
  let chain = [ m ]
  while (m !== 1) {
    m = m % 2 === 0 ? m / 2 : m * 3 + 1
    chain.push(m) 
  }
  return chain 
}
console.log(collatzSequence(23))

// recursive
function collatzSequence(n) {
  const arr = [];
  arr.push(n);
  // INTERNAL FUNCTION USES RECURSION
  function collatz(num, array) {
    // BASE CASE
    if (num === 1) {
      return array;
      // IF EVEN...
    } else if (num % 2 === 0) {
      num /= 2;
      array.push(num);
      // RECURSIVE FUNCTION CALL
      return collatz(num, array);
      // IF ODD...
    } else num = num * 3 + 1;
    array.push(num);
    // RECURSIVE FUNCTION CALL
    return collatz(num, array);
  }
  collatz(n, arr);
  return arr;
}
console.log(collatzSequence(23));
