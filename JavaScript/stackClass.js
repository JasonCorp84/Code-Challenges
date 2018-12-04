/*let's make a class called "Stack" and give it this LIFO functionality. Our Stack class's storage will be an Array. You'll want to make two methods in you Stack class: add and remove. The add method will push an item into storage. The remove method will remove the last item in storage.

Lastly, add a method to your Stack class called numOfItems. If there are no items in your Stack's storage, then return the message, "There are no items in your Stack." If there are items in storage, then return the number of items. */

// using class 
class Stack {
  constructor() {
    this.storage = [] // sets up empty array for, well, storage
  }
  add(item) { // function to add item to the new array
    this.storage.push(item) // adds item
  }
  remove() { // function to remove item
    return this.storage.pop() //  pop off item
  }

  numOfItems() { // function to find how many items in storage 
    if (this.storage.length === 0) { // if storage is empty
      return `There are no items in your ${this.constructor.name}.` // returns there are no items in this (constructor name)
    }
    return this.storage.length // return length of array, gives us number of items in storage
  }
}

// using this
function Stack() {
  this.storage = [] 
  this.add = function(item) { // creates function to add item
    this.storage.push(item)
  }
  this.remove = function() { // creates function to remove
    return this.storage.pop()
  }
  this.numOfItems = function() {
    if (this.storage.length === 0) {
      return `There are no items in your ${this.constructor.name}.`
    }
    return this.storage.length
  }
}

// using prototypes
function Stack() {
  this.storage = []
}
Stack.prototype.add = function(item) {
  this.storage.push(item)
}
Stack.prototype.remove = function() {
  return this.storage.pop()
}
Stack.prototype.numOfItems = function() {
  if (this.storage.length === 0) {
    return `There are no items in your ${this.constructor.name}.`
  }
  return this.storage.length
}

// Output to match:
const myStack = new Stack()
console.log(myStack.numOfItems())
myStack.add('first')
myStack.add('second')
myStack.add('third')
console.log(myStack.numOfItems()) // <--- should be 3
console.log(myStack.storage); // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first' ]
myStack.remove();
console.log(myStack.numOfItems()); // <--- There are no items in your Stack.
console.log(myStack.storage); // <--- []
