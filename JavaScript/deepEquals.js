/* Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: 

toBinaryString(6) should return "110" (no leading 0).   

Use of the native method number.toString(2);  is disallowed.

console.log(toBinaryString(0));  // <--- 0
console.log(toBinaryString(1));  // <--- 1
console.log(toBinaryString(2));  // <--- 10
console.log(toBinaryString(3));  // <--- 11
console.log(toBinaryString(4));  // <--- 100
console.log(toBinaryString(5));  // <--- 101
console.log(toBinaryString(6));  // <--- 110
console.log(toBinaryString(7));  // <--- 111
console.log(toBinaryString(8));  // <--- 1000
console.log(toBinaryString(9));  // <--- 1001
console.log(toBinaryString(10)); // <--- 1010
console.log(toBinaryString(11)); // <--- 1011
console.log(toBinaryString(12)); // <--- 1100
console.log(toBinaryString(13)); // <--- 1101
console.log(toBinaryString(14)); // <--- 1110
console.log(toBinaryString(15)); // <--- 1111
console.log(toBinaryString(16)); // <--- 10000

*/
// super magic version
function deepEquals(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

// visible logic version
function deepEquals(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (typeof obj1[key] === 'object') {
        if (!deepEquals(obj1[key], obj2[key])) return false
      }
      else if (obj1[key] !== obj2[key]) return false
    }
  }
  else return false
  return true 
}