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

//     for (let key in freqCounter1) {
//         if (freqCounter2[key * key]) {
//             if (freqCounter1[key] === freqCounter2[key * key]) {
//                 continue
//             }
//         }
//         return false
//     }
//     return true
// }

// function validAnagram(str1, str2){
//     if (str1.split('').length !== str2.split('').length) {
//         return false
//     }
    
//     let freqCounter1 = {}
//     let freqCounter2 = {}
    
//     for (let val of str1) {
//         freqCounter1[val] = (freqCounter1[val] || 0) + 1
//     }
//     for (let val of str2) {
//         freqCounter2[val] = (freqCounter2[val] || 0) + 1
//     }
    
//     for (let key in freqCounter1) {
//         if (freqCounter2[key]) {
//             if (freqCounter1[key] === freqCounter2[key]) {
//                 continue
//             }
//         }
//         return false
//     }
//     return true
//   }

// function sameFrequency(int1, int2){
//     if (Number.isInteger(int1) === false || Number.isInteger(int2) === false || 
//     int1 < 0 || int2 < 0) {
//         return 'please use positive integers only'
//     }
    
//     let intArr1 = int1.toString().split('')
//     let intArr2 = int2.toString().split('')
    
//     if (intArr1.length !== intArr2.length) {
//         return false
//     }
    
//     let counter1 = {}
//     let counter2 = {}
    
//     for (let val of intArr1) {
//         counter1[val] = (counter1[val] || 0) + 1
//     }
    
//     for (let val of intArr2) {
//         counter2[val] = (counter2[val] || 0) + 1
//     }
    
//     for (let key in counter1) {
//         if (counter2[key]) {
//             if (counter1[key] === counter2[key]) {
//                 continue
//             }
//         }
//         return false
//     }
//     return true
// }
  
// MULTIPLE POINTERS

// function countUniqueValues(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     let left = 0
//     let right = 1
//     let count = 1

//     while (right < arr.length) {
//         if (arr[left] === arr[right]) {
//             right++
//         } else {
//             count++
//             left = right
//             right++
//         }
//     }
//     return count
// }

// function areThereDuplicates(...args) {
//     if (args.length === 0 || args.length === 1) {
//         return false
//     }
    
//     let start = 0
//     let end = args.length - 1
//     let left = 1
//     let right = args.length - 2
  
//     while(start < end) {
//         if (args[start] === args[left] || args[end] === args[right]) {
//             return true
//         }
  
//         if (start === right || end === left) {
//             start++
//             left = start + 1
//             end--
//             right = end - 1
//         } else {
//           left++
//           right--
//         }
//     }
//     return false
//   }

// function averagePair(arr, n){
//     if (arr.length === 0) {
//         return false
//     }
    
//     let left = 0
//     let right = arr.length - 1
    
//     while(left < right) {
//         if ((arr[left] + arr[right]) / 2 === n) {
//             return true
//         } else if ((arr[left] + arr[right]) / 2 < n) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return false
// }

// function isSubsequence(str1, str2) {

//     if (str1.split('').length > str2.split('').length) {
//         return false
//     }
    
//     let left = 0
//     let right = 0
//     let match = 0
  
//     while (right < str2.split('').length) {
        
//         let subStr2 = str2.split('')
//         let subStr1 = str1.split('')
        
//         if (subStr1[left] === subStr2[right]) {
//             left++
//             right++
//             match++
  
//         } else {
//             right++
//         }
        
//         if (match === subStr1.length) {
//             return true
//         }
//     }
//    return false
// }

// SLIDING WINDOW

// function maxSubarraySum(arr, n){
//     if (n > arr.length) {
//         return null
//     }
//     let finalMax = 0
//     let tempMax = 0
    
//     for (let i = 0; i < n; i++) {
//         tempMax = tempMax + arr[i]
//     }
  
//     finalMax = tempMax
  
//     for (let i = n; i < arr.length; i++) {
//         tempMax = (tempMax + arr[i]) - arr[i - n]
//         finalMax = Math.max(tempMax, finalMax)
//     }
//     return finalMax
//   }



