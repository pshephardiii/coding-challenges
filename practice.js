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

function productOfArray(arr) {

    if (arr.length === 0) {
        return 'empty array'
    }
    
    let product = arr[arr.length - 1]

    function multiplyArr(array) {

        if (array.length > 1) {
            array.pop()
            product = product * array[array.length - 1]
            return multiplyArr(array)
        }
        return product * array[0]
    }

    multiplyArr(arr)
    return product
}

console.log(productOfArray([]))

