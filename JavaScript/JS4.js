// Debug this code
/*function Parent(attributes) {
  gender = attributes.gender;
  age = attributes.age;
  name = attributes.name;
  homeTown = attributes.homeTown;
  const yabbaDabba = function() {
    return 'Yabba dabba doo!';
  };
}

protype.speak = function() {
  console.log(['Hello, my name is', `${name}`]);
};

const fred = new Parent(
  'gender',
  'Male',
  'age',
  35,
  'name',
  'Fred',
  'homeTown',
  'Bedrock'
);

const wilma = new Parent(
  'gender',
  'Female',
  'age',
  37,
  'name',
  'Wilma',
  'homeTown',
  'Bedrock'
);

console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.speak());

function Child(childAttributes) {
  Parent.crawl(childAttributes); // binding to Parent
  isChild = childAttributes.isChild; // a special attribute to Child
}

protype.checkIfChild = function() {
  if (isChild) {
    console.log(`My name is ${name} and I am a ${constructor.name} object`);
  }
};

protype = Object.create(Parent.protype);

const pebbles = new Child(
  'gender',
  'Female',
  'age',
  3,
  'name',
  'Pebbles',
  'homeTown',
  'Bedrock'
);

console.log(pebbles);
console.log(pebbles.speak());
console.log(pebbles.checkIfChild());
console.log(pebbles.yabbaDabba()); */

function Parent(attributes) {
  this.gender = attributes.gender;
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.yabbaDabba = function() {
    return 'Yabba dabba doo!';
  };
}

Parent.prototype.speak = function() {
  return `Hello, my name is ${this.name}`
};

const fred = new Parent({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

const wilma = new Parent({
  gender: 'Female',
  age: 37,
  name: 'Wilma',
  homeTown: 'Bedrock'
});

console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.speak());

function Child(childAttributes) {
  Parent.call(this, childAttributes); // binding to Parent
  this.isChild = true; // a special attribute to Child
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.checkIfChild = function() {
 return `My name is ${this.name} and I am a ${this.constructor.name} object`
};

const pebbles = new Child({
  gender: 'Female',
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock'
});

console.log(pebbles);
console.log(pebbles.speak());
console.log(pebbles.checkIfChild());
console.log(pebbles.yabbaDabba());