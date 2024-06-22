// Bubble Sort

// function bubbleSort(arr) {
//     // use to check for whether there were any swaps on the iteration...
//     // if not, array is already sorted, so break
//     let noSwaps = null

//     for (let i = arr.length - 1; i >= 0; i--) {

//         noSwaps = true

//         for (let j = 0; j <= i - 1; j++) {

//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) {
//             break
//         } 
//     }
//     return arr
// }

// Selection Sort

// function selectionSort(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         let min = i

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         if (i !== min) {
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
//     return arr
// }

