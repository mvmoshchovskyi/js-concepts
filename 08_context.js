// const person = {
//     surname: 'Stark',
//     knows: function (know, name) {
//         console.log(`you ${know} known ${name} ${this.surname}`)
//     }
// }
// const john = {surname: 'Snow',}
// person.knows('all ', 'Bran')
// person.knows.bind(john,'any','John')()
// person.knows.call(john,'any','John')
// person.knows.call(john,...['any','John'])
// person.knows.apply(john,['any','John'])

//=======
// function Person(name,age){
//     this.name=name
//     this.age=age
//     console.log(this)
//
// }
// const p = new Person('misha',35)

//=================      явний
// function logThis(){
//     console.log(this)
//
// }
// const obj = {num:42}
// logThis.call(obj)

//==============         неявний
// const animal= {
//     legs:4,
//     logThis:function (){
//         console.log(this)
//     }
//   }
// animal.logThis()

//===============

function Cat(color) {
    this.color = color
    console.log('This ', this);
    (() => console.log('Arrow this', this))();


}

new Cat('red')