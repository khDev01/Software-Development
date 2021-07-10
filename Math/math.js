const length = 6
const positiveMax = 100
const negativeMax = -100

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomInt(0, positiveMax))

// myarray = (isanInteger) => {
//   if (isanInteger === true) {
//     return true
//   } else {
//     return false
//   }ggg
// }
//
// console.log(myarray(true))
randomArray = (length, max) =>
  [...Array(length)].map(
    () => Math.round(Math.random() * max)
    // Math.round(Math.random() * max)
  )

// randomArray = (length, max) =>
//   [...Array(length)].map(
//     () => -Math.abs(Math.round(Math.random() * max))
//   )
console.log(randomArray(5, 100))

const mylength = 6

//similar version
// console.log(
//   [...Array(mylength)].map(
//     (e) => ~~(Math.random() * positiveMax)
//   )
// )
//
// randomly generated N = 40 length array 0 <= A[N] <= 39
// randomIntArray = Array.from({ length: length }, () =>
//   Math.floor(Math.random() * positiveMax)
// )
// console.log(randomIntArray)

// Is an integer
const isInt = (value) => Number.isInteger(value)
console.log(isInt(5))
console.log(isInt(6.78))

// is odd
const isOdd = (value) => !!(value & 1)
console.log(isOdd(9))
console.log(isOdd(8))
