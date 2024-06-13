// function power(num1, num2) {
//     if (num2 > 1) {
//         return num1 * power(num1, num2 - 1)
//     }
//     return num1
// }

// console.log(power(8, 0))

// function factorial(n) {
//     if (n > 1) {
//         return n * factorial(n - 1)
//     }
//     console.log(n)
//     return n
// }

// function productOfArray(arr) {

//     if (arr.length === 0) {
//         return 'empty array'
//     }

//     let product = arr[arr.length - 1]

//     function multiplyArr(array) {

//         if (array.length > 1) {
//             array.pop()
//             product = product * array[array.length - 1]
//             return multiplyArr(array)
//         }
//         return product * array[0]
//     }

//     multiplyArr(arr)
//     return product
// }

// function recursiveRange(n) {
//     if (n === 1) {
//         return n
//     }
//     return n + recursiveRange(n - 1) 
// }

function fib(n){
    if (n === 1 || n === 2) {
        return 1
    }
    let m = 2
    let num1 = 1
    let num2 = 1
    let sum = 0
    
    function add(n1, n2) {
      m++
      sum = n1 + n2
      n1 = n2
      n2 = sum
      if (m !== n) {
          return add(n1, n2)
      }
      return sum
    }
    add(num1, num2)
    return sum
  }
