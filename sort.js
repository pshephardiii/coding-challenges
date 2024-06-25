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

// Insertion Sort

// function insertionSort(arr) {

//     for (let i = 1; i < arr.length; i++) {
        
//         let currentVal = arr[i]

//         for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//             arr[j] = currentVal
//         }
//     }
//     return arr
// }

// Merge Sort

// Merge helper function
// function merge(n, m) {
//     let arr = []
//     let i = 0
//     let j = 0

//     while (arr.length < (n.length + m.length)) {
//         // if the n value is greater than the m value, push that m value and increase the index for m
//         if (n[i] > m[j]) {
//             arr.push(m[j])
//             j++
//         // if the n value is less, push that n value and increase the index for n
//         } else if (n[i] < m[j]) {
//             arr.push(n[i])
//             i++
//         // if the values are equal, push both and increase both indexes
//         } else if (n[i] === m[j]) {
//             arr.push(n[i])
//             arr.push(m[j])
//             i++
//             j++
//         // This else will run if one of the arrays is empty but the other is not
//         } else {
//             // if there's anything left in n, push it and increase index
//             if (i < n.length) {
//                 arr.push(n[i])
//                 i++
//             // if there's anything left in m, push it and increase index
//             } else if (j < m.length) {
//                 arr.push(m[j])
//                 j++
//             }
//         }
//     }
//     return arr
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     // find midpoint of array
//     let mid = Math.floor(arr.length / 2)
//     // create shallow copy of left half of array
//     // send that left half back into the function to be broken up further
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     // Eventually merge the array elements into the right order piece by piece
//     return merge(left, right)
// }

// Quick Sort




