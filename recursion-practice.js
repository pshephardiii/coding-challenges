// RECURSION PRACTICE

// function power(num1, num2) {
//    if (num2 === 0) {
//      return 1
//    }
//     if (num2 > 1) {
//         return num1 * power(num1, num2 - 1)
//     }
//     return num1
// }


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

// function fib(n){
//     if (n === 1 || n === 2) {
//         return 1
//     }
//     let m = 2
//     let num1 = 1
//     let num2 = 1
//     let sum = 0
    
//     function add(n1, n2) {
//       m++
//       sum = n1 + n2
//       n1 = n2
//       n2 = sum
//       if (m !== n) {
//           return add(n1, n2)
//       }
//       return sum
//     }
//     add(num1, num2)
//     return sum
//   }

// function reverse(str) {
//     if (typeof str !== "string") {
//         return 'not a string'
//     }

//     let strArr = str.split('')
//     let revArr = []

//     function addReverse(arr) {
//         if (arr.length) {
//             revArr.push(arr.pop())
//             return addReverse(arr)
//         }
//         return revArr
//     }
//     addReverse(strArr)
//     let revStr = revArr.join('')
//     return revStr
// }

// function isPalindrome() {
//     let arr = str.split('')
//   if (arr.length === 1 || arr.length === 0) {
//       return true
//   }
//   if (arr[0] === arr[arr.length - 1]) {
//       arr.pop()
//       arr.shift()
//       let newStr = arr.join('')
//       return isPalindrome(newStr)
//   }
//   return false
// }

// function someRecursive(arr, callback){
//     let l = arr.length
//     if (l === 0) {
//         return false
//     }  
//     if (callback(arr[l - 1]) === true) {
//         return true
//     } else {
//         arr.pop()
//         return someRecursive(arr, callback)
//     }
// }


// function flatten(arr){
    
//     let l = arr.length
    
//     let flatArr = []
    
//     function flattenSub(subArr) {
        
//         for (let val of subArr) {
//             if (val.length) {
//                 flattenSub(val)
//             } else {
//                 flatArr.push(val)
//             }
            
//         }
//     }

//     for (let val of arr) {
//         if (val.length) {
//             flattenSub(val)
//         }
//         else flatArr.push(val)
//     }

//     return flatArr
// }

// function capitalizeFirst (arr) {
//     let newArr = []
//     let n = 0
    
//     function capitalizeAll(array) {
        
//         let strArr = array[n].split('')

//         let capital = strArr[0].toUpperCase()

//         strArr.shift()
//         strArr.unshift(capital)
 
//         let newStr = strArr.join('')
//         newArr.push(newStr)
//          n++
//         if (n === array.length) {
//             return newArr
//         } else {
//             return capitalizeAll(array)
//         }
//    }

//    capitalizeAll(arr)
//    return newArr
//  }

// function capitalizeWords (arr) {
//     let newArr = []
//     let newStrArr = []
//     let n = 0
    
//     function capitalizeAll(str) {
      
//       let strArr = str.split('')
//       let capital = strArr[n].toUpperCase()
//       newStrArr.push(capital)
//       n++
      
//       if (n === strArr.length) {
//           n = 0
//           let newStr = newStrArr.join('')
//           newStrArr = []
//           return newStr

//       } else {
//           return capitalizeAll(str)
//       } 
//     }
    
//     for (let val of arr) {
//         newArr.push(capitalizeAll(val))
//     }
//     return newArr
//   }

// function nestedEvenSum (obj) {
//     let sum = 0
//     let vals = Object.values(obj)
    
//     for (let val of vals) {
                  
//         if (typeof val === 'object') {
//             sum = sum + nestedEvenSum(val)

//         } else {            
//             if (typeof val === 'number') {
//                 if (val % 2 === 0) {
//                     sum = sum + val
//                 }
//             }
//         }
//     }
//     return sum
//   }
