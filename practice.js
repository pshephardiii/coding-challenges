// function power(num1, num2) {
//     if (num2 > 1) {
//         return num1 * power(num1, num2 - 1)
//     }
//     return num1
// }

// console.log(power(8, 0))

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1)
    }
    console.log(n)
    return n
}

