var text = "Hello          World            "
// console.log(text)

// text = text.trim()

// console.log(text)
// console.log(text.length)

// console.log(text.trim().toLowerCase())

// console.log(text.charCodeAt(2))

// var newString = text.concat(" = salom")

// console.log(newString)
// console.log("salom" + 123)


// var a = 12
// var b = 32
// var c = 22


// function calculate(y) {
//     console.log(12 * y ** 2)
// }

// calculate(a)
// calculate(b)
// calculate(c)
//  a*b+a/b

// var resultDivide

// function divide(a = 3, b = 1) {
//     resultDivide = a / b
// }

// var resultMultiply

// function multiply(a, b) {
//     resultMultiply = a * b
// }

// var a = 13
// var b = 2

// divide(a, b)
// multiply(a, b)

// console.log(resultDivide)
// console.log(resultMultiply)



// var a = 13
// var b = 2
// function divide(a = 3, b = 1) {
//     return a / b
//     console.log("Salom")
// }

// function multiply(a, b) {
//     return a * b
// }

// var divideResult = divide(13, 2)
// var multiplyResult = multiply(13, 2)

// console.log(divideResult)
// console.log(multiplyResult)


// console.log(round(4.5))
// console.log(floor(4.5))


// Function Expression
// var ceil = function (a) {
//     if (typeof a !== "number") return
//     return String(a)[0] - 0
// }

// console.log(ceil(4.6))


// function declaration
// function floor(a) {
//     if (typeof a !== "number") return
//     var result = a.toFixed(0)

//     if (a > result) return result - 0 + 1
//     return result
// }

// var round = function (a) {
//     var result = a.toFixed(0)
//     if (a - result >= 0.5) return result - 0 + 1
//     return result
// }


// console.log(round)

// const obj = {
//     name: "John"
// }

// console.log(obj)

// obj.name = "Hello"

// console.log(obj)


// ceil()
var ceil = function () {

}

// const PI = 3.14
// PI = 12

// console.log(a)
// let a = 12

// console.log(a)

// function fizzBuzz(a) {
//     if (a === 0) return "FizzBuzz"

//     if (a % 2 === 1) return "Fizz"
//     return "Buzz"
// }

// console.log(fizzBuzz(0))

// function fizzBuzz(a) {
//     if (a % 3 === 0 && a % 5 === 0) return "FizzBuz"

//     if (a % 3 === 0) return "Fizz"
//     if (a % 5 === 0) return "Buzz"

//     return "3 ga ham 5ga ham bo'linmaydi"
// }

// console.log(fizzBuzz(20))
var m = [] // 
if (m) {
    console.log("Tog'ri")
} else {
    console.log("Notog'ri")
}

// Truthy "hello" - 10 NaN //
// "0" bo'sh bo'lmagan satr 
// number 0 dan tashqari
// {} - object
// [] - massiv

//Falsy
// undefined
// null
// ""
// 0
// NaN

var text = "Hello World"

console.log(text.indexOf("o"))