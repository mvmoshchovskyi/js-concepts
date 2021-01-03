// __proto__
// Object.getPrototypeOf()

// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says myau`)
// }
// const cat = new Cat('white', 'Kot')
// console.log(Cat.prototype)
// console.log(cat.__proto__)
// console.log(cat)
// console.log(cat.constructor)
// console.log(cat.voice());

//======================
// function Person() {
// }
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'
//
// const person = new Person()
// person.name = 'Misha'
// console.log('skin' in person)
// console.log(person.legs)
//
// console.log(Object.hasOwnProperty('name'))
// console.log(Object.hasOwnProperty('skin'))

//  Object.create()
const proto = {year:2020}
const myYear = Object.create(proto)
console.log(myYear.year)
proto.year = 2021
console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ ===proto)