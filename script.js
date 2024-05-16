// Challenge 1

function solveMeFirst(a, b) {
  if (a >= 1 && a <= 1000 && b >= 1 && b <= 1000) {
      return a + b
  }
}

// Challenge 2

function simpleArraySum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++){
        sum = sum + ar[i]
    }
    return sum
}

// Challenge 3

function compareTriplets(a, b) {
    let finalArr = [0, 0]
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            finalArr[0]++
        } else if (b[i] > a[i]) {
            finalArr[1]++
        } else {continue}
    }
    return finalArr
}

// Challenge 4

function aVeryBigSum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i]
    }
    return sum
}

// Challenge 5

function diagonalDifference(arr) {
    let n = arr[0].length
    let topLeft = arr[0][0]
    let bottomLeft = arr[n-1][0]
    let topRight = arr[0][n-1]
    let bottomRight = arr[n-1][n-1]
    
    let sum1 = topLeft + bottomRight
    let sum2 = topRight + bottomLeft
    
    let diagUpRight = 0
    let diagUpLeft = 0
    
    for (let i = 1; i < n-1; i++) {
        diagUpRight = diagUpRight + arr[n-(i+1)][i]
        diagUpLeft = diagUpLeft + arr[i][i]
    } 
    sum1 = sum1 + diagUpLeft
    sum2 = sum2 + diagUpRight
    
    let absDiff = sum1 - sum2
    if (absDiff < 0) {
        absDiff = absDiff * -1
    }
    
    return absDiff
}

// Challenge 6

function plusMinus(arr) {
    let ratioPos = 0
    let ratioNeg = 0
    let ratioZero = 0
    let numPos = 0
    let numNeg = 0
    let numZero = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            numPos++
        } else if (arr[i] < 0){
            numNeg++
        } else {numZero++}
    }
    
    ratioPos = numPos/arr.length
    ratioNeg = numNeg/arr.length
    ratioZero = numZero/arr.length
    let ratioPosPrec = ratioPos.toPrecision(6)
    let ratioNegPrec = ratioNeg.toPrecision(6)
    let ratioZeroPrec = ratioZero.toPrecision(6)
    console.log(ratioPosPrec)
    console.log(ratioNegPrec)
    console.log(ratioZeroPrec)
}

// Challenge 7

function staircase(n) {
    let stairs = ''
    for (let i = 1; i < n + 1; i++) {
        if (i === (n)) {
            stairs = stairs.concat(''.padStart(n, "#"))
        } else {
            let add = ''
            let space = add.padStart(n - i, ' ')
            let pad = space.padEnd(n, '#')
            let newLine = pad.padEnd(n + 1, '\n')
            stairs = stairs.concat(newLine)
        }
    }
    console.log(stairs)
}