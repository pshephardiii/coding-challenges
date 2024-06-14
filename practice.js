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

// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTER

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let freqCounter1 = {}
//     let freqCounter2 = {}

//     for (let i = 0; i < arr1.length; i++) {
//         freqCounter1[arr1[i]] ? freqCounter1[arr1[i]]++ : 
//         freqCounter1[arr1[i]] = 1

//         freqCounter2[arr2[i]] ? freqCounter2[arr2[i]]++ : 
//         freqCounter2[arr2[i]] = 1
//     }

//     for (key in freqCounter1) {
//         if (freqCounter2[key * key]) {
//             if (freqCounter1[key] === freqCounter2[key * key]) {
//                 continue
//             }
//         }
//         return false
//     }
//     return true
// }

function validAnagram(str1, str2){
    if (str1.split('').length !== str2.split('').length) {
        return false
    }
    
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    for (let val of str1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    
    for (let key in freqCounter1) {
        if (freqCounter2[key]) {
            if (freqCounter1[key] === freqCounter2[key]) {
                continue
            }
        }
        return false
    }
    return true
  }
  

