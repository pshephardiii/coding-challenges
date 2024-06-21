// Linear Search

// function linearSearch(arr, val){
  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i
//         } 
//     }
//     return -1
//   }

// Binary Search

// function binarySearch(arr, val){
    
//     let left = 0
//     let right = arr.length - 1
  
//     while(left < right) {
  
//         let mid = Math.floor((left + right) / 2)
  
//         if (val < arr[mid]) {
//             mid--
//             right = mid

//         }  else if (val > arr[mid]) {
//             mid++
//             left = mid
//         }
        
//         if (val === arr[mid]) {
//             return mid
//         }
//     }
//     return -1
// }

// Naive String Search

// function stringSearch(str, subStr) {

//     let count = 0

//     for (let i = 0; i < str.length; i++) {

//         for (let j = 0; j < subStr.length; j++) {
            
//             if (subStr[j] !== str[i]) {
//                 break
//             }
//             if (subStr[j] === str[i] && j !== subStr.length - 1) {
//                 i++
//             }
//             if (subStr[j] === str[i] && j === subStr.length - 1) {
//                 count++
//             }
//         }
//     }
//     return count
// }



