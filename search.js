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
//             right = mid - 1

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