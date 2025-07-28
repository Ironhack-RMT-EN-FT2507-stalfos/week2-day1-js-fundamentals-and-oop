 // myAge = undefined


// HOISTING

// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization
console.log(myAge)

let myName = "jorge";
var myAge = 32;

console.log(myName)
console.log(myAge)

// ... 500 lines of code

// let myName = "bob" // SyntaxError: Identifier 'myName' has already been declared
var myAge = 38;
console.log(myAge)


//* Hoisting in functions
sayHello()

function sayHello() {
  console.log("Hello! I am a function")
}

sayHello()

function sayHello() {
  console.log("Hello, welcome to the page!")
}

sayHello()



//* SCOPES

//* Global Score
let veggie = "potatoe" // global scope


function myFunction() {
  if (true) {
    for(let i = 0; i < 10; i++) {
      let myVar = true
      switch(myVar) {
        case true:
          console.log(veggie)
      }
    }
  }
}


myFunction()


//* Block Scopes
{
  let myVariable1 = "this is a variable with let" // only exists inside this scope
  var myVariable2 = "this is a variable with var" // is creates in the global scope due to hoisting
  myVariable3 = "this is a variable with no keyword" // created in the global scope


  console.log(myVariable1)
  console.log(myVariable2)
  console.log(myVariable3)
}
// erases all let variables for mantaining memory
// console.log(myVariable1)
console.log(myVariable2) // I can access this due to hoisting
console.log(myVariable3) // I can access this due to it being created in the global scope



//* Function Scope
function testFunction() {

  let myStrVar1 = "this is a variable in a function with let" // only exists inside this scope
  var myStrVar2 = "this is a variable in a function with var" // is creates in the function scope with hoisting
  myStrVar3 = "this is a variable in a function with no keyword" // created in the global scope


  console.log(myStrVar1)
  console.log(myStrVar2)
}
// erases all let variables for mantaining memory

testFunction()

// console.log(myStrVar1)
// console.log(myStrVar2)
console.log(myStrVar3) // I can access this due to it being created in the global scope



// Conclusions
// - never use var
// - when using function, use hoisting to your advantage
// - NEVER create variables without declaring
// - Read about this when preparing for technical interviews



//* REFERENCES

let age1 = 29;
let age2 = 29;

console.log( age1 === age2 )

let agesArr1 = [29, 34, 50] // ref 1234
let agesArr2 = [29, 34, 50] // ref 5678

console.log( agesArr1 === agesArr2 ) // ref 1234 === ref 5678: false
// even though the values inside the array are the same, THE ARRAYS are different
// we always compare by reference

console.log( agesArr1[0] === agesArr2[0] )

// a way to check if the arrays have the same values
console.log( JSON.stringify( agesArr1 ) === JSON.stringify( agesArr2 ) )
console.log( agesArr1.toString() === agesArr2.toString() )

// JS compares primitive data by value and non-primitive data by reference


let agesArr3 = agesArr1 // we are assigning the same reference of agesArr1 to agesArr3 // ref 1234
console.log(agesArr3)

agesArr3.pop() // ref 1234
console.log(agesArr3)
console.log(agesArr1)

function removeFirstElement(array) {
  // let array = agesArr1 // ref 1234
  // any modifications to array will also apply to the original data
}

removeFirstElement(agesArr1)


// how can we clone arrays
// let newArray = agesArr1.slice(0)

// other ways of cloning
// - .map()
// - JSON parse & JSON Stringify
// - structuredClone()
// - spread operator


//* CLASSES

class Hero {

  constructor( nameParam, secretIdentity ) {
    // where the properties will be defined
    this.name = nameParam; // dynamic property, it depends on the values passed on creation.
    this.secretIdentity = secretIdentity;
    this.isEvil = false; // static property. All objects start with this value.
  }

  // where the methods will be defined
  revealSecretIdentity() {
    // console.log("My secret identity is: _____")
    return `I am ${this.name}, and my secret identity is: ${this.secretIdentity}`
  }

  turnEvil() {
    this.isEvil = true;
    return `I, ${this.name} have become a villain! MUAHAHAHA!`
  }

}


const hero1 = new Hero( "Iron Man", "Tony Stark" )
console.log( hero1 )
console.log( hero1.name )
console.log( hero1.revealSecretIdentity() )

const hero2 = new Hero( "Batman", "Bruce Wayne" )
console.log( hero2.turnEvil() )
console.log(hero2)

const hero3 = new Hero( "Black Widow", "Natasha Romanoff" )
console.log(hero3)
console.log( hero3.revealSecretIdentity() )


//* Subclass

class SuperHero extends Hero {

  constructor(name, secretIdentity, superPower) {
    super(name, secretIdentity) // moving those parameters for the parent class in order to asign them as their properties
    this.superPower = superPower
  }

  useSuperPower( target ) {
    return `${this.name} is using ${this.superPower} on ${target}!`
  }

}

const superHero1 = new SuperHero("Spiderman", "Peter Parker", "throw web attacks")
console.log(superHero1)
console.log(superHero1.revealSecretIdentity())

const superHero2 = new SuperHero("Wolverine", "Logan", "claw attack")
console.log(superHero2)
console.log( superHero2.useSuperPower( hero1.name ) )
console.log( superHero2.useSuperPower( superHero1.name ) )