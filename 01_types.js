// undefined , null, boolean, string, number , object, symbol , bigInt

// BigInt є вбудованим об'єктом, який надає можливість відображати неушкодженими числа, більші за 253 - 1
// BigInt утворюється додаванням n у кінець цілочисельного літералу — 10n — або викликом функції BigInt().

// console.log(typeof undefined);
// console.log(typeof null); // null
// console.log(typeof false); // boolean
// console.log(typeof 'something');
// console.log(typeof 42);
// console.log(typeof {});//object
// console.log(typeof []);//object
// console.log(typeof Symbol(42));//symbol
// console.log(typeof function (){});//object
// console.log(typeof NaN) //number

//переведенян типів
// console.log(Boolean([])) // true
// console.log(Boolean({})) // true
// console.log(Boolean(function (){})) // true
// console.log(Boolean(' ')) // true
// console.log(Boolean(null)) // false

// строки і числа
// console.log(1+'2') //12
// console.log(4+3+'') //7
// console.log(''+1+5) //15 str
// console.log(undefined+2) //NaN
// console.log(null+2) //2

//========
// console.log(undefined==null) //true
// console.log(undefined===null) // false

// ========
// console.log(0==[]) true
// console.log(0=={}) false