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
